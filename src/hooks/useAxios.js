import React, {useState, useEffect} from 'react'
import axios from 'axios'

function useAxios({ url }) {
    const [response, setResponse] = useState(null); 
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = () => {
            axios
            .get(url)
            .then(res => setResponse(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }
    }, [url]);

return {response, error, loading}

}

export default useAxios
