import React, { useContext} from 'react';
import moment from 'moment';
import {
  Form,
  Button,
  TimePicker,
} from 'antd';

import { Context } from './context/Context';
import { Date } from './Date';


export const FormCategory = () => {


    const {setStartHour,setEndHour,startHour,endHour,starDate,endDate, setUrl} = useContext(Context);

    const format = 'HH';

    // CAMBIO LA HORA DE INICO Y LA AGREGO A LA URL
    function changeStartHour(time, timeString) {
        setStartHour(startHour=>startHour=timeString);

        let newUrl =`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${timeString}:00:00.00Z&end=${endDate}T${endHour}:00:00.00Z`;

        setUrl(nUrl=>nUrl=newUrl);

    }

    // CAMBIO LA HORA DE FIN Y LA AGREGO ALA URL
    function changeEndtHour(time, timeString) {

        setEndHour(hourEnd=>hourEnd=timeString)

        let newUrl =`http://172.24.99.155:8000/api/categorias-filter/?start=${starDate}T${startHour}:00:00.00Z&end=${endDate}T${timeString}:00:00.00Z`;

        setUrl(nUrl=>nUrl=newUrl);
    }


    return (
    <>
        <Form
            labelCol={{ span: 8}}
            wrapperCol={{ span: 16}}
            layout="horizontal"
        >
            <Form.Item label="Fecha Inico">
                <Date tipo={'incio'}/>
            </Form.Item>

            <Form.Item label="Hora Inico">
                <TimePicker className="date border" onChange={changeStartHour} defaultValue={moment('00', 'HH')} format={format}/>
            </Form.Item>

            <Form.Item label="Fecha Final">
                <Date  tipo={'fin'}/>
            </Form.Item>

            <Form.Item label="Hora Final">
                <TimePicker className="date border" onChange={changeEndtHour} defaultValue={moment('00', 'HH')} format={format}/>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 5,
                },
                }}
            >
                <Button type="primary" htmlType="submit" size='large' block>
                    Consultar
                </Button>
            </Form.Item>
      </Form>

    </>
  );
};



