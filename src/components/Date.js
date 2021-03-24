import React, { useContext, useRef } from 'react'
import { Context } from './context/Context'


export const Date = ({tipo}) => {
const {setEndDate,setStarDate,startHour,endHour,starDate,endDate, setUrl,setUrlDistrito,tableHead,categoria} = useContext(Context)
    const refd = useRef(null)


    const mostrar=(date)=>{

        console.log('Ricardo cortes')
        console.log(tipo)
        console.log(date)
        if(tipo==='incio'){

             if(tableHead==='categoria'){

                 setStarDate((startDate)=>startDate=refd.current.value);
                 let inicio=refd.current.value;
                 let newUrl =`http://172.24.99.155:8000/api/categorias-filter/?start=${inicio}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`;
                 setUrl(nUrl=>nUrl=newUrl);
                 console.log(newUrl);

              } else{
                setStarDate((startDate)=>startDate=refd.current.value);
                let inicio=refd.current.value;
                let newUrl =`http://172.24.99.155:8000/api/distritos-filter/${categoria}/?start=${inicio}T${startHour}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`;
                setUrlDistrito(nUrl=>nUrl=newUrl);
             }

        }else if(tipo==='fin'){

            if(tableHead==='categoria'){
                setEndDate((startDate)=>startDate=refd.current.value)
                let fin=refd.current.value
                let newUrl =`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${startHour}:00:00.00Z&end=${fin}T${endHour}:00:00.00Z`;
                 setUrl(nUrl=>nUrl=newUrl)
            }else{
                setEndDate((startDate)=>startDate=refd.current.value)
                let fin=refd.current.value
                let newUrl =`http://172.24.99.155:8000/api/distritos-filter/${categoria}/?start=${starDate}T${startHour}:00:00.00Z&end=${fin}T${endHour}:00:00.00Z`;
                 setUrlDistrito(nUrl=>nUrl=newUrl)
            }

        }

    }



    return (
        <>
          <input type="date" className="date" id="fecha" ref={refd} value={tipo==='incio'?starDate:endDate} onChange={mostrar} min="2008-01-01" max="2017-12-31"/>
        </>
    )
}

// http://172.24.99.155:8000/api/categorias-filter/?start=2021-03-02T00:00:00.00Z&end=2021-03-11T23:00:00.00Z