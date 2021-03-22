import React, { useEffect, useState } from 'react'
import { Context } from '../components/context/Context'
import { RouterPages } from '../pages/RouterPages'


export const Home = () => {

    const [startHour, setStartHour] = useState('00')
    const [endHour, setEndHour] = useState('23')
    const [dataTable, setDataTable] = useState([]);
    const [maxResolution, setMaxResolution] = useState({});

    const [starDate, setStarDate] = useState('2008-01-01')
    const [endDate, setEndDate] = useState('2017-12-31')
    const [url, setUrl] = useState(`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`);



    // let url = `http://172.24.99.155:8000/api/categorias-filter/?start=2008-03-25T${startHour}:00:00.00Z&end=2011-04-05T${endHour}:00:00.00Z`;

     useEffect( () => {
        let data=[];
        fetch(url)
        .then(res => res.json())
        .then(response => {
            Object.values(response).forEach((infoTable, idx) => {

                data=[...data,{
                    key:idx+1,
                    category: infoTable.Category,
                    resolution: infoTable.Resolution,
                    cantidad: infoTable.Cantidad
                }];
    
            });
            setDataTable([...data]);
        });
        return () => {
            setDataTable([])
        }
    },[url]);


    let dataContext={
      dataTable,
      setStartHour,
      setEndHour,
      startHour,
      endHour,
      starDate, 
      setStarDate,
      endDate,
      setEndDate,
      url,
      setUrl,
      maxResolution,
      setMaxResolution
    }
    return ( <>
        <Context.Provider value = { dataContext } >
           <RouterPages / >
        </Context.Provider>
        </>
    )
}