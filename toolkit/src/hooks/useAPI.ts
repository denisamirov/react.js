import {useState, useEffect} from 'react'


export interface films {
  Search?: Array<filmsArray>,
}

export interface filmsArray {
  Title?: string,
  imdbID?: number,
  Poster?: string,
  Actors?: string,
  Genre?: string,
  Released?:string,
  Runtime?:string,
  Director?:string,
  imdbRating?: number,
  length: number
}

export default function useJson(url:string){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<null | films>(null)
    const [error, setError] = useState<Error | null>(null)
    
    // console.log(opts)

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