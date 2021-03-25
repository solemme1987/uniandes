
// ESTE HELPERS ME TRATE LA LISTA DE LOS AÑOS
export const getLisYear=async(urlBasica)=>{

     let data=[];

     await fetch(urlBasica)
     .then(res => res.json())
     .then(response => {

        //    LLENO EL ARREGO CON LA DATA DE CADA AÑO
         response.forEach(({year})=>{
               data=[...data,year]
         });

     })

     return data

 }

