import React, { useEffect, useState } from 'react'
import { Bar } from '@ant-design/charts';
import { Column } from '@ant-design/charts';
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

    var config = {
        data: data,
        xField: 'year',
        yField: 'Count',
        isGroup: true,
        isStack: true,
        seriesField: 'typeR',
        groupField: 'DayOfWeek',
        label: {
                    position: 'middle',
                    content: function content(item) {
                        return item.DayOfWeek
                    },
                    // style: { fill: '#fff' },
                },
    };
    // let config = {
    //     data: data,
    //     xField: 'year',
    //     yField: 'DayOfWeek',
    //     seriesField: 'ReportCount',
    //     isPercent: true,
    //     isStack: true,
    //     label: {
    //         position: 'middle',
    //         content: function content(item) {
    //             return item.callCount.toFixed(2);
    //         },
    //         style: { fill: '#fff' },
    //     },
    // };
    return (
        <Column {...config}/>
        // <Bar {...config}/>
    )
}
