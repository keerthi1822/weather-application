import { useState, useEffect ,useRef} from 'react';
import axios from 'axios';

const useFetch = (location) => {
console.log(location)
    const key = '72b6082af2c24437893155504232404';

    let uri = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}`

    const [data,setData] = useState({});
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const response = await axios.get(uri);
            /* setData(JSON.stringify(response.data, null, 1)); */
            setData(response.data);
            setLoading(false);
            /* console.log(response); */
          } catch (error) {
            setLoading(false);
            setError(error);
            console.log("error occured::", error);
          }
        };
        fetchData();
        return ()=>console.log('unmounted')
      }, [uri]);
      return { data, loading, error };

}

export default useFetch;