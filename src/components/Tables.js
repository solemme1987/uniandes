import React, { useContext, useEffect } from 'react'
import { Table,Row, Col } from 'antd';
import { Context } from './context/Context';
import { FormCategory } from './FormCategory';
import { CardInfo} from './CardInfo';

export const Tables = ({columns,showSelect}) => {

    const {dataTable,setMaxResolution} = useContext(Context)





    // ESTE USEEFFECT LO QU EHACE SACARME  LA
    // CATEGORIA QUE MAS SE REPITE EN LA TABLA
    let midato;
     useEffect(() => {

         midato =  dataTable;
        if (midato.length>0){


            const cantidad = midato.reduce((acumulador,actual)=>{
            return acumulador=[...acumulador,actual.resolution];
            },[])


            let repetidos = {};

            //Cuento la cantidad de veces que se repite cada Resolucion
            cantidad.forEach(function(resolucion){
            repetidos[resolucion] = (repetidos[resolucion] || 0) + 1;
            });

            //OBTENGO UNICAMENTE EL NOMBRE DE LA RESOLUCION QUE MAS SE REPITE Y SU CANTIDAD
            let masRepetido= Object.entries(repetidos).reduce(function(acumulador, actual){
                return acumulador[1] > actual[1] ? acumulador : actual;
            });

            //PASO EL NOMBRE  DE LA RESOLUCION, LA TOTALIDA DE VECES QUE SE REPITE Y
            // Y  LA TOTALIDA DE LA MUESTRA, POR EJEMPLO SE REPITE 5 DE 20
            setMaxResolution(maxRe=>maxRe={
                resolucion:Object.values(masRepetido)[0],
                repeticiones:Object.values(masRepetido)[1],
                total:midato.length
            })

       }
       return () => {
          setMaxResolution(maxR=>maxR=[])
       }
     }, [dataTable])



return (
    <Row className="tablaCategorias">

        <Col span={6} >
            <CardInfo />
            <FormCategory showSelect={showSelect} />
        </Col>

        <Col span={18}>
            <Table
                columns = { columns }
                dataSource = { dataTable }
                size="small"
                pagination={{pageSize:8}}
            />
        </Col>

    </Row>
);
}

