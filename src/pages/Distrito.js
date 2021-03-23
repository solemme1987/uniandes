import React, { useContext, useEffect } from 'react'
import { Context } from '../components/context/Context';
import { Tables } from '../components/Tables'

export const Distrito = () => {

    const {setTableHead} = useContext(Context)
    useEffect(() => {
     setTableHead(tHead=>tHead='distrito');
    })

    return (
        <>
             <Tables />
        </>
    )
}
