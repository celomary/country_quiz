
const getCountriesFlag = async ()=> {
    try
     {
         const data = await (await fetch(`${import.meta.env.VITE_ENDPOINT}/flag/images`)).json();
         return data.data;
     }
     catch(error)
     {
         console.error(error);
         return null;
     }
}

export default getCountriesFlag;