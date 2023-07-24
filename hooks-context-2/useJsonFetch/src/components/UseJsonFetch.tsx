import {useState, useEffect} from 'react'
import { Loading } from './Loading'
import { data } from '../models/models'
import { Error } from './Error'
import { Props } from '../models/models'


export const UseJsonFetch = ({url, opts}:Props) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<data>()

  useEffect(() => {
    console.log(opts)
    const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
      console.log(data, 'data')
    }

    catch (e) { 
      setData(null);
      console.log(e)
    } 
    finally { setLoading(false); }

    };

    fetchData()

  }, [url])
  return (
    <>
      <div className="ca">
        <div>{loading && <Loading />}</div>
        <div>
           {data ? data.status : !loading && <Error />}
        </div>
      </div>
    </>
  )
}
