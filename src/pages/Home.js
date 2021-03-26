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
    const [starDate, setStarDate] = useState('2010-03-25')
    const [endDate, setEndDate] = useState('2010-04-05')
    const [url, setUrl] = useState(`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`);
    const [urlDistrito, setUrlDistrito] = useState(`http://172.24.99.155:8000/api/distritos-filter/${categoria}/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`);
    // const [urlMapa, setUrlMapa] = useState(`http://172.24.99.155:8000/api/map/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`);
    const [urlMapa, setUrlMapa] = useState(` http://172.24.99.155:8000/api/map/?start=2010-03-25T20:00:00.00Z&end=2010-04-05T01:00:00.00Z`);

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
      setTableHead,
      urlMapa, 
      setUrlMapa
    }

    return ( <>
        <Context.Provider value = { dataContext } >
           <RouterPages / >
        </Context.Provider>
        </>
    )
}