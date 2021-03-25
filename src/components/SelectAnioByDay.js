import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { getLisYear } from '../helpers/getListYear';
import { GraficByDay } from './GraficByDay';
import { OptionYears } from './OptionYears';

export const SelectAnioByDay = () => {

    const [years, setYears] = useState([])
    const [url, setUrl] = useState(`http://172.24.99.155:8000/api/semana-llamada/?year=0`)


    let urlBasica=`http://172.24.99.155:8000/api/year-enr/`;

    useEffect(() => {
        getLisYear(urlBasica).then(year=>{
            setYears(year)
        })

    }, [urlBasica])

    const changeYears =(e)=>{
        let newUrl = `http://172.24.99.155:8000/api/semana-llamada/?year=${e.target.value}`;
        setUrl(newUrl);
    }
    return (

        <Row>
            <Col span={24} style={{fontSize:'1.5rem'}}>
                    <h1>
                       Elije Año para Mostra Gráfica
                    </h1>
            </Col>
         <Col span={24}>

             <select className="date borde" onChange={changeYears}>
             <option defaultValue='0'>0</option>
             {
                years.map((element)=>(

                    <OptionYears
                        key={element}
                        value={element}
                    />
                ))
             }

             </select>
         </Col>
         <Col span={24}>
              <GraficByDay url={url}/>
         </Col>

        </Row>

    )
}
