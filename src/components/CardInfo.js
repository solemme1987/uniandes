import { Col} from 'antd'
import React, { useContext } from 'react'
import { Context } from './context/Context';

export const CardInfo = () => {

 const {maxResolution} = useContext(Context);
 const {resolucion,repeticiones,total} = maxResolution;

    return (
        

            <Col span={23} className="card gutter-row">
                 <div className="cardContent">
                     <h3 className="cardTittle">Resolución Más común</h3>
                     <p className="comunResolution">{resolucion}</p>
                     <i className="fab fa-algolia logo a"></i>
                     <div className="divisor">
                       <p className="repetResolution">Repeticiones: <span>{repeticiones} de {total}</span></p>
                     </div>
                 </div>
            </Col>

    )
}

