import React from 'react'

import { Table } from 'antd';




export const Tables = () => {

    // fetch('ajax/ajax.goalDetails.php', {
    //     method: 'POST',
    //     body: data
    // })
    // .then(res => res.text())
    // .then(data => {


fetch('http://172.24.99.155:8000/api/categorias-filter/?start=2008-03-25T20:00:00.00Z&end=2011-04-05T01:00:00.00Z').then(res => res.text())
.then(data => {
   console.log(data);
})

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Chinese Score',
          dataIndex: 'chinese',
         
        },
        {
          title: 'Math Score',
          dataIndex: 'math',
         
        },
        {
          title: 'English Score',
          dataIndex: 'english',
         
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          chinese: 98,
          math: 60,
          english: 70,
        },
        {
          key: '2',
          name: 'Jim Green',
          chinese: 98,
          math: 66,
          english: 89,
        },
        {
          key: '3',
          name: 'Joe Black',
          chinese: 98,
          math: 90,
          english: 70,
        },
        {
          key: '4',
          name: 'Jim Red',
          chinese: 88,
          math: 99,
          english: 89,
        },
      ];
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }
    return (
        <>
        <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
    )
}
