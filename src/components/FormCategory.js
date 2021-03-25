import React, { useContext} from 'react';
import moment from 'moment';
import {
  Form,
  TimePicker,
} from 'antd';

import { Context } from './context/Context';
import { Date } from './Date';
import { ListaCategorias } from '../containers/ListaCategorias ';



export const FormCategory = ({showSelect}) => {
    //tod lo que me provee el use context
    const
    {
        setStartHour,
        setEndHour,
        startHour,
        endHour,
        starDate,
        endDate,
        setUrl,
        setUrlDistrito,
        categoria,
        tableHead
    } = useContext(Context);

    const format = 'HH'; //formato para la hora


    // CAMBIO LA HORA DE INICO Y LA AGREGO A LA URL
    function changeStartHour(time, timeString) {

        setStartHour(startHour=>startHour=timeString);
        let newUrl

        if(tableHead==='categoria'){

            // AQUI MODIFCO LA URL DEL PUNTO 1 PARA LAS CATEGORIAS
           newUrl=`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${timeString}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`;
           setUrl(nUrl=>nUrl=newUrl);
        }
        else {
            // AQUI MODIFCO LA URL DEL PUNTO 2 PARA LOS DISTRITOS
            newUrl=`http://172.24.99.155:8000/api/distritos-filter/${categoria}/?start=${starDate}T${timeString}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`;
            setUrlDistrito(nUrl=>nUrl=newUrl)
            console.log(tableHead)
        }

    }

    // CAMBIO LA HORA DE FIN Y LA AGREGO ALA URL
    function changeEndtHour(time, timeString) {

        setEndHour(hourEnd=>hourEnd=timeString)
        let newUrl

        if(tableHead==='categoria'){
            newUrl =`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${timeString}:00:00.00Z`;

            setUrl(nUrl=>nUrl=newUrl);
        }else {

            newUrl =`http://172.24.99.155:8000/api/distritos-filter/${categoria}/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${timeString}:00:00.00Z`;

            setUrlDistrito(nUrl=>nUrl=newUrl);

        }
    }


    return (
    <>
        <Form
            labelCol={{ span: 8}}
            wrapperCol={{ span: 16}}
            layout="horizontal"
            style={{marginTop:'20px'}}
        >
            <Form.Item >
                <label style={{fontWeight: 'bolder'}}>Fecha de incio</label>
                <Date tipo={'incio'}/>
            </Form.Item>

            <Form.Item className="inputData">
                <label>Hora de inicio</label>
                <TimePicker  size="large" className="date border" onChange={changeStartHour} defaultValue={moment('00', 'HH')} format={format}/>
            </Form.Item>

            <Form.Item  className="inputData">
                <label>Fecha de Inicio</label>
                <Date  tipo={'fin'}/>
            </Form.Item>

            <Form.Item className="inputData ">
                 <label>Hora Final</label>
                <TimePicker className="date border " onChange={changeEndtHour} defaultValue={moment('00', 'HH')} format={format}/>
            </Form.Item>

            <Form.Item className="inputData " style={{display:showSelect}} >
                  <label>Categorias</label>
                  <ListaCategorias  />
            </Form.Item>

      </Form>

    </>
  );
};



