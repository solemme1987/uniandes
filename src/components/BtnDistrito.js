import React, { useState } from 'react'
import { Button, Col} from 'antd';

export const BtnDistrito = ({element,setDistrito}) => {

    const [size, setsize] = useState('xs');

    const getDistrito=(e)=>{
        setDistrito(dis=>dis=e.target.value)
    }

    return (

        <Col className="gutter-row" span={4}>

            <button
              type="primary"
              size={size}
              value={element}
              onClick={getDistrito}
            >
            {element}
            </button>
        </Col>

    )
}

