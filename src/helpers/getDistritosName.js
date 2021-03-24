export const crearBotones=async ()=>{


   let url=`http://172.24.99.155:8000/api/distritos-listed/`;
    let data=[];

    await fetch(url)
    .then(res => res.json())
    .then(response => {

        response.forEach(({PdDistrict})=>{
              data=[...data,PdDistrict]
        });

    })

    return data

}
