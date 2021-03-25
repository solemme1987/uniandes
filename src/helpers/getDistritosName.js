// ESTE HELPER ME OBTIENE LA LISTA DE TODOS  LOS DISTRITOS PARA EL PUNTO
// PUNTO 3

export const crearBotones=async ()=>{


   let url=`http://172.24.99.155:8000/api/distritos-listed/`;
    let data=[];

    await fetch(url)
    .then(res => res.json())
    .then(response => {
            // IGUAL LLE NO LA DATA PARA LOS BOTOES DE CADA DISTRITO EN EL PUNTO 3
        response.forEach(({PdDistrict})=>{
              data=[...data,PdDistrict]
        });

    })

    return data

}
