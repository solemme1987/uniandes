import { Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { BtnDistrito } from '../components/BtnDistrito';
import { GraficoDistrito } from '../components/GraficoDistrito';
import { crearBotones } from '../helpers/getDistritosName';




export const Charts = () => {
    const [size, setSize] = useState('large');

    const [distrito, setDistrito] = useState('CENTRAL');


     const [nombresDistritos, setNombresDistritos] = useState([])


        useEffect(() => {
           crearBotones().then(nomDis=>setNombresDistritos(nomDis))
           return(
               setNombresDistritos([]) 
           )
        }, [])

        if(nombresDistritos.length>0){
            console.log(nombresDistritos)
        }

    return (
     <>
         <Space direction="vertical" size={size}>

            <Row gutter={[16, 5]}>
                {
                    nombresDistritos.map((element) => (

                        <BtnDistrito
                            key={element}
                            element={element}
                            setDistrito={setDistrito}
                        />

                    ))
                }
            </Row>

            <Row gutter={[16, 10]}>
                <Col className="gutter-row" span={24}>
                    <GraficoDistrito distrito={distrito}/>
                </Col>
            </Row>

        </Space>
     </>
    )
}

