// esta funcion me obtiene  todos los datos para llenar la grafica del punto 3

export const getDataGrafics=async (url)=>{
    let data=[];

    await fetch(url)
    .then(res => res.json())
    .then(response => {

      data=[...data,response];

    })

    return data

}