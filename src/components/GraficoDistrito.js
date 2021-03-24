import { Column } from '@ant-design/charts';
import React, { useEffect, useState } from 'react'
import { getDataGrafics } from '../helpers/getDataGrafics';

export const GraficoDistrito = ({distrito}) => {

    const [data, setData] = useState([])

    let url=`http://172.24.99.155:8000/api/distritos-evolution/${distrito}`;

    useEffect(() => {
        getDataGrafics(url).then(nomDis=>nomDis.forEach(element => {
                setData(element)
        }))
       return(
        setData([])
       )
    }, [url])

    let config = {
        data:  data.sort((a, b) => a.year - b.year),
        xField: 'year',
        yField: 'ReportCount',
        seriesField: 'Category',
        isPercent: true,
        isStack: true,
        label: {
            position: 'middle',
            content: function content(item) {
                return item.ReportCount.toFixed(2);
            },
            style: { fill: '#fff' },
        },
    };

    return (
        <Column {...config}/>
    )
}
