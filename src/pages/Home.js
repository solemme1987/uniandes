import React, { useState } from 'react'
import { Context } from '../components/context/Context'
import { RouterPages } from '../pages/RouterPages'


export const Home = () => {
    const [tableHead, setTableHead] = useState('categoria')
    const [startHour, setStartHour] = useState('00')
    const [endHour, setEndHour] = useState('23')
    const [dataTable, setDataTable] = useState([]);
    const [maxResolution, setMaxResolution] = useState({});
    const [categoria, setCategoria] = useState('ARSON')
    const [starDate, setStarDate] = useState('2008-01-01')
    const [endDate, setEndDate] = useState('2017-12-31')
    const [url, setUrl] = useState(`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`);
    const [urlDistrito, setUrlDistrito] = useState(`http://172.24.99.155:8000/api/distritos-filter/${categoria}/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`);

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
      setMaxResolution,
      urlDistrito,
      setUrlDistrito,
      setDataTable,
      categoria,
      setCategoria,
      tableHead, 
      setTableHead
    }

    return ( <>
        <Context.Provider value = { dataContext } >
           <RouterPages / >
        </Context.Provider>
        </>
    )
}