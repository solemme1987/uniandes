import React, { useContext } from 'react'
import { CardInfo } from '../components/CardInfo';
import { Context } from '../components/context/Context';
import { Tables } from '../components/Tables';


export const Categories = () => {
    
    // const {setTableHead} = useContext(Context)
    // setTableHead(tHead=>tHead='categoria');
    return (
        <>
            <CardInfo />
            <Tables tableHead={'categoria'}/>
        </>
    )
}