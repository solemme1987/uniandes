import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Line } from '@ant-design/charts';
export const GraficYears = ({url}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, [url]);

    const asyncFetch = () => {

    fetch(url)
    .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    var config = {
      data: data,
      xField: 'Category',
      yField: 'ReportCount',
      seriesField: 'DayOfWeek',
      yAxis: {
        label: {
          formatter: function formatter(v) {
            return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
              return ''.concat(s, ',');
            });
          },
        },
      },
      color: ['#1979C9', '#D62A0D', '#FAA219'],
    };

   
    return (
        <>
            <Line {...config} /> 
        </>
    )
}