import React, { useEffect, useState } from 'react'
import { Bar } from '@ant-design/charts';
export const GraficByDay = ({url}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch(url);
    }, [url]);

    const asyncFetch = (url) => {

    fetch(url)
    .then((response) => response.json())
    // .then((json) => console.log('Data 7',json))
        .then((json) => setData(json))
        // .catch((error) => {
        //   console.log('fetch data failed', error);
        // });
    };

    let config = {
        data: data,
        xField: 'callCount',
        yField: 'DayOfWeek',
        seriesField: 'year',
        isPercent: true,
        isStack: true,
        label: {
            position: 'middle',
            content: function content(item) {
                return item.callCount.toFixed(2);
            },
            style: { fill: '#fff' },
        },
    };
    return (
        <Bar {...config}/>
    )
}
