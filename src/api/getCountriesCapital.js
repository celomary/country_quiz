const getCountriesCapital = async ()=> {
    try
     {
         const data = await (await fetch(`${import.meta.env.VITE_ENDPOINT}/capital`)).json();
         return data.data;
     }
     catch(error)
     {
         console.error(error);
         return null;
     }
}

export default getCountriesCapital;