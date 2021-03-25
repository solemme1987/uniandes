// ESTA FUNCION ME OBTIENE  LA LISTA DE TODAS LAS CATEGORIAS
export const fetchData= async()=>{
    let algo=[]
     const url = `http://172.24.99.155:8000/api/categorias-listed/`;
      await fetch(url)
     .then(data=> data.json())
     .then((resp)=>{
            // LLENO EL ARREGLO CON LA DATA DE CADA CATEGORIA
         Object.values(resp).forEach(element => {
             algo.push(element.Category)
         });
     })
    return algo;
 }


