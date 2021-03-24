export const fetchData= async()=>{
    let algo=[]
     const url = `http://172.24.99.155:8000/api/categorias-listed/`;
      await fetch(url)
     .then(data=> data.json())
     .then((resp)=>{
        //  algo=[...algo,resp.Category]
         Object.values(resp).forEach(element => {

             algo.push(element.Category)
         });
     })
    return algo;
 }


