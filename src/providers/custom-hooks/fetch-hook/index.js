import { useEffect, useState } from "react";
import options from "./options";

// HOST for URL about movies
const HOST = "https://api.themoviedb.org";

// custom "useFetch()" hook fr doing requests
function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${HOST}/${endpoint}`, options);
                if (response.ok) {
                    const fetchedData = await response.json();
                    setData(fetchedData);
                } else {
                    setError('Request Failed')
                }
            } catch (error) {
                setError("Something went wrong")
            }
              setLoading(false)

        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}

export default useFetch;
