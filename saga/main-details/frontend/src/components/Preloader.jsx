import photo from '../assets/react.svg'
import { useSelector } from "react-redux/"
import { Error } from './Error'

export const Preloader = () => {

  const isLoading = useSelector(state => state.cards.isLoading);
  const isLoadingDetails = useSelector(state => state.cards.isLoadingDetails);

  return (
    <>
      {
        !isLoading && !isLoadingDetails ? 
        <Error /> :
        <div>
          <img src={photo} className='logo'/>
        </div>
       }
    </>
  )
}
