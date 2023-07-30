import useJson from './useJson'
import { Loading } from './Loading'
import { Props } from '../models/models'

export const Test = ({url, opts}:Props) => {
    const [data, loading, error] = useJson(url, opts);

  return (
    <>
     <div className="ca">
        <div>{loading && <Loading />}</div>
        <div>
           {data ? data.status : !loading && error}
        </div>
      </div>
    </>
  )
}
