import { Tables } from '../components/Tables';

export const Categories = () => {

       const columns = [{
               title: 'CATEGORÍA',
               dataIndex: 'category',
           },
           {
               title: 'RESOLUCIÓN',
               dataIndex: 'resolution',
           },
           {
               title: 'CANTIDAD',
               dataIndex: 'cantidad',
           },

        ];

    // const {setTableHead} = useContext(Context)
    // setTableHead(tHead=>tHead='categoria');
    return (
        <>
         <Tables columns={columns}/>
        </>
    )
}