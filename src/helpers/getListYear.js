
// ESTE HELPERS ME TRATE LA LISTA DE LOS AÑOS
export const getLisYear=async()=>{


    let url=`http://172.24.99.155:8000/api/year/`;
     let data=[];

     await fetch(url)
     .then(res => res.json())
     .then(response => {
        //    LLENO EL ARREGO CON LA DATA DE CADA AÑO
         response.forEach(({year})=>{
               data=[...data,year]
         });

     })

     return data

 }

