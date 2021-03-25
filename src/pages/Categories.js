// instalr charts
// npm install @ant-design/charts --legacy-peer-deps


import { useContext, useEffect } from 'react';
import { Context } from '../components/context/Context';
import { Tables } from '../components/Tables';

export const Categories = () => {

    const {url,setDataTable,setTableHead} = useContext(Context)

    // COLUMNAS DE LA TABLA PAR CATEGORIAS PRIMER PUNTO
       const columns = [{
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

       useEffect(() => {
          let data=[];
            fetch(url)
            .then(res => res.json())
            .then(response => {
                Object.values(response).forEach((infoTable,idx) => {

                    data=[...data,{
                        key:idx+1,
                        category: infoTable.Category,
                        resolution: infoTable.Resolution,
                        cantidad: infoTable.Cantidad
                    }];
                });
                setDataTable(dtable=>dtable=[...data]);
            })


        setTableHead(tHead=>tHead='categoria');

        return(
            setDataTable(dtable=>dtable=[])
        )

     },[url,setTableHead,setDataTable])


    return (
        <>
         <Tables columns={columns} showSelect={'none'}/>
        </>
    )
}