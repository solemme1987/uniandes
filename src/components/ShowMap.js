import { Col, Row } from 'antd'
import React, { useContext, useEffect } from 'react'
import { Context } from './context/Context'
import { FormCategory } from './FormCategory'
import { GraficMap } from './GraficMap'

export const ShowMap = () => {

     const {setTableHead} = useContext(Context)
     useEffect(() => {
         setTableHead(thead=>thead='map');
     })
    return (
        <Row className="tablaCategorias">

            <Col span={6} >
                <FormCategory showSelect={'none'} />
            </Col>
            <Col span={18}>
               <GraficMap />
            </Col>
        </Row>
    )
}
