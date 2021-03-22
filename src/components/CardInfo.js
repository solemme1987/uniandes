import { Col, Row} from 'antd'
import React, { useContext } from 'react'
import { Context } from './context/Context';

export const CardInfo = () => {

 const {maxResolution} = useContext(Context);
 const {resolucion,repeticiones,total} = maxResolution;

    return (
        // <Row gutter={[16, 16]}>
           <>
            <Col span={6} className="card gutter-row">
                 <div className="cardContent">
                     <h3 className="cardTittle">Resolucíon Mas común</h3>
                     <p className="comunResolution">{resolucion}</p>
                     <i className="fab fa-algolia logo a"></i>
                     <div className="divisor">
                       <p className="repetResolution">Repeticones: <span>{repeticiones} de {total}</span></p>
                     </div>
                 </div>
            </Col>
            </>
            /* <Col span={6} className="card gutter-row">
                 <div className="cardContent">
                     <h3 className="cardTittle">Resolucíon Mas común</h3>
                     <p className="comunResolution">Aarrest, Booked</p>
                     <i className="fas fa-atlas logo b"></i>
                     <div className="divisor">
                       <p className="repetResolution">Repeticones: <span>8 de 20</span></p>
                     </div>
                 </div>
            </Col>
            <Col span={6} className="card gutter-row">
                 <div className="cardContent">
                     <h3 className="cardTittle">Resolucíon Mas común</h3>
                     <p className="comunResolution">Aarrest, Booked</p>
                     <i className="fas fa-archive logo c"></i>
                     <div className="divisor">
                       <p className="repetResolution">Repeticones: <span>8 de 20</span></p>
                     </div>
                 </div>
            </Col>
            <Col span={6} className="card gutter-row">
                 <div className="cardContent">
                     <h3 className="cardTittle">Resolucíon Mas común</h3>
                     <p className="comunResolution">Aarrest, Booked</p>
                     <i className="fab fa-angular logo d"></i>
                     <div className="divisor">
                       <p className="repetResolution">Repeticones: <span>8 de 20</span></p>
                     </div>
                 </div>
            </Col> */

        // </Row>
    )
}

