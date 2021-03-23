import React, { useContext, useEffect } from 'react'
import { Table,Row, Col } from 'antd';
import { Context } from './context/Context';
import { FormCategory } from './FormCategory';

export const Tables = () => {

     const {setDataTable,url,urlDistrito,dataTable,setMaxResolution,tableHead} = useContext(Context)

    let columns;
    // ESTAS SON LAS COLUMNAS DE LA TABLA
    if(tableHead==="categoria"){

        columns = [{
               title: 'CATEGORÍA',
               dataIndex: 'category',
           },
           {
               title: 'RESOLUCIÓN',
               dataIndex: 'resolution',
           },
           {
               title: 'CANTIDAD',
               dataIndex: 'cantidad',
           },

        ];
    }else{

        columns = [{
            title: 'PDDISTRICT',
            dataIndex: 'pddistrict',
        },
        {
            title: 'RESOLUCIÓN',
            dataIndex: 'resolution',
        },
        {
            title: 'SUMA',
            dataIndex: 'suma',
        },

    ];
    }
    // LLENO LA TABLA
    useEffect( () => {
        let data=[];
        fetch(tableHead==='categoria' ? url :urlDistrito)
        .then(res => res.json())
        .then(response => {
            if(tableHead==='categoria'){//SI INGRESO A LA  SESION DE CATEGORIAS LA TABLA SE LLENA CON CATEGORIAS
                Object.values(response).forEach((infoTable, idx) => {

                    data=[...data,{
                        key:idx+1,
                        category: infoTable.Category,
                        resolution: infoTable.Resolution,
                        cantidad: infoTable.Cantidad
                    }];

                });
            }else{//SI INGRESO A LA SESION DE DISTRITOS LA TABLA SE LLENA CON LA DATA DE DISTRITOS 
                Object.values(response).forEach((infoTable, idx) => {

                    data=[...data,{
                        key:idx+1,
                        pddistrict: infoTable.PdDistrict,
                        resolution: infoTable.Resolution,
                        suma: infoTable.suma
                    }];

                });
            }

            setDataTable(dtable=>dtable=[...data]);
        });

        return () => {
            setDataTable(dtable=>dtable=[])
        }
    },[tableHead==='categoria' ? url :urlDistrito]);
    

    // ESTE USEEFFECT LO QU EHACE SACARME  LA
    // CATEGORIA QUE MAS SE REPITE EN LA TABLA
    let midato;
     useEffect(() => {

         midato=  dataTable;
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

        <Col span={6}>
            <FormCategory />
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

