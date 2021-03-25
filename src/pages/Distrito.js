import React, { useContext, useEffect } from 'react'

import { Context } from '../components/context/Context';
import { Tables } from '../components/Tables'

export const Distrito = () => {
 const {urlDistrito,setDataTable,setTableHead} = useContext(Context);

    // ColumNS PARA LA TABLA DE DISTRITO PUNTO 2
    const columns = [{
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

    useEffect(() => {
      let data=[];

        fetch(urlDistrito)
        .then(res => res.json())
        .then(response => {
            Object.values(response).forEach((infoTable, idx) => {

                data=[...data,{
                    key:idx+1,
                    pddistrict: infoTable.PdDistrict,
                    resolution: infoTable.Resolution,
                    suma: infoTable.suma
                }];

            });
            setDataTable(dtable=>dtable=[...data]);
        })

        setTableHead(tHead=>tHead='distrito');

        return(
            setDataTable(dtable=>dtable=[])
        )
    },[urlDistrito,setDataTable,setTableHead]);

    return (
        <>
             <Tables columns={columns} showSelect={''}/>
        </>
    )
}
