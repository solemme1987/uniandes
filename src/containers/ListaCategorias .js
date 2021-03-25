import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../components/context/Context';
import { OptionCat } from '../components/OptionCat';
import { fetchData } from '../helpers/getCategory';

export const ListaCategorias  = () => {
    const {
        startHour,
        endHour,
        starDate,
        endDate,
        setUrlDistrito, 
        tableHead} = useContext(Context);
     const [opciones, setOpciones] = useState([])

    //  OBTENEMOS LAS CATEGORIAS.
       useEffect(() => {
          fetchData().then(categorias=>setOpciones(categorias))
       }, [])

      const changeCategori=(e)=>{
         let cat = e.target.value
         let newUrl=`http://172.24.99.155:8000/api/distritos-filter/${cat}/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`;
         setUrlDistrito(urlDis=>urlDis=newUrl)
         console.log(tableHead)

      }

    return (

        <select className="date border " onChange={changeCategori}  >
            {
                opciones.map((element)=>(

                    <OptionCat
                        key={element}
                        value={element}
                    />
                ))
            }
        </select>

    )
}
