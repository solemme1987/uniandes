import React, { useContext, useEffect } from 'react'

import { Context } from '../components/context/Context';
import { Tables } from '../components/Tables'

export const Distrito = () => {


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

    const {setTableHead} = useContext(Context)
    useEffect(() => {
     setTableHead(tHead=>tHead='distrito');
    })

    return (
        <>
             <Tables columns={columns} />
        </>
    )
}
