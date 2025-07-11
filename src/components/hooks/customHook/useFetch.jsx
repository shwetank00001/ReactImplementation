import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [commonData, setCommonData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCommonData(){
            try {
                const data = await fetch(url);
                const response = await data.json();
                setCommonData(response);
                setLoading(false);
            } catch (error) {
                console.log("Error is:",error);
            }
        }
        getCommonData()
    }, [url]);
    
    console.log("Fetch Component data", commonData);

  return {commonData, loading}
}

export default useFetch