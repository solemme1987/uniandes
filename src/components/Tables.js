import React, { useContext, useEffect } from 'react'
import { Table,Row, Col } from 'antd';
import { Context } from './context/Context';
import { FormCategory } from './FormCategory';

export const Tables = () => {

     const {dataTable,setMaxResolution} = useContext(Context)

    // Columnas de la tabla
    let columns = [{
            title: 'CATEGORÍA',
            dataIndex: 'category',
        },
        {
            title: 'RESOLUSIÓN',
            dataIndex: 'resolution',
        },

    ];

     useEffect(() => {

        let midato=  dataTable;
        if (midato.length>0){
            console.log('Mi dato',midato)

        const cantidad = midato.reduce((acumulador,actual)=>{
        return acumulador=[...acumulador,actual.resolution];
        },[])

        // console.log("Cantidad",cantidad);
        let repetidos = {};

        // //   Cuento la cantidad de veces que se repite cada Resolucion
        cantidad.forEach(function(resolucion){
        repetidos[resolucion] = (repetidos[resolucion] || 0) + 1;
        });

        // //  OBTENGO UNICAMENTE EL NOMNRE DE LA RESOLUCION QUE MAS SE REPITE Y SU CANTIDAD
        let masRepetido= Object.entries(repetidos).reduce(function(acumulador, actual){
            return acumulador[1] > actual[1] ? acumulador : actual;
        });
        setMaxResolution(maxRe=>maxRe={
            resolucion:Object.values(masRepetido)[0],
            repeticiones:Object.values(masRepetido)[1],
            total:midato.length
        })


        // return () => {

        // }
       }
    }, [dataTable])



return (
    <Row className="tablaCategorias">
        <Col span={6}>
            <FormCategory />
        </Col>
        <Col span={10}>
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