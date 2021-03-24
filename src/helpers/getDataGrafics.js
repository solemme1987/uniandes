export const getDataGrafics=async (url)=>{

    let data=[];

    await fetch(url)
    .then(res => res.json())
    .then(response => {

     

      data=[...data,response];

    })

    return data

}