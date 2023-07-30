import {useState, useEffect} from 'react'
import { data } from '../models/models'


export default function useJson(url:string, opts:string){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<data | null>()
    const [error, setError] = useState<Error | null>()
    
    console.log(opts)

    useEffect(() => {
      const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setError(null);
      }
  
      catch (e) { 
        const err = e as Error
        setData(null);
        setError(err);
      } 
      finally { setLoading(false); }
  
      };
  
      fetchData()
  
    }, [url])

    return [data, loading, error]
}
