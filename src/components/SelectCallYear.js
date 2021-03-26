import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { getLisYear } from '../helpers/getListYear';
import { GraficCallReport } from './GraficCallReport';
import { OptionYears } from './OptionYears';

export const SelectCallYear = () => {

    const [years, setYears] = useState([])
    const [url, setUrl] = useState(`http://172.24.99.155:8000/api/llamada-reporte/?year=0`)


    let urlBasica=`http://172.24.99.155:8000/api/year-enr/`;



    // capturo los años para el selct
    useEffect(() => {

        getLisYear(urlBasica).then(year=>{
            setYears(year)
        })

    }, [urlBasica])

 const changeYears=(e)=>{
    let newUrl = `http://172.24.99.155:8000/api/llamada-reporte/?year=${e.target.value}`;
    setUrl(newUrl);
    console.log(newUrl);
 }

    return (
        <Row>
            <Col span={24} style={{fontSize:'1.5rem'}}>
                    <h1>
                      Reportes VS LLamadas
                    </h1>
            </Col>
            <Col span={24}>

            <select className="date borde" onChange={changeYears}>
             <option defaultValue={0}>0</option>
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
             <GraficCallReport url={url}/>
         </Col>
        </Row>
    )
}
