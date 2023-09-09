import { Row, Col, Button, Form } from 'react-bootstrap'
import { changeUrl, changeTitle, changeFilms, StartSearch, FilmsAdd, FilmsClean} from '../store/cardsSlice'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store/store'
import useJson from '../hooks/useAPI'
import { Preloader } from './Preloader'
import { Cards } from './Cards'

export const Search = () => {
     
    const url = useSelector((state: RootState) => state.cards.url)
    const title = useSelector((state: RootState) => state.cards.filmTitle)
    const search = useSelector((state: RootState) => state.cards.search)

    const dispatch = useDispatch()
    const [data, loading] = useJson(url);
    dispatch(changeFilms(data))

    


    if (typeof data === 'object' && data !== null && 'Search' in data && search === 1 && data.Search != undefined) {

        dispatch(FilmsClean())
        for (let j = 0; j < data.Search.length; j++) {
            const link = data.Search[j].imdbID
            const url = `http://www.omdbapi.com?apikey=64405bd2&i=${link}`
            dispatch(changeUrl(url))

            const fetchData = async (url:string) => {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    dispatch(FilmsAdd(data))
                }
            
                catch (e) { 
                    const err = e as Error
                    console.log(err)
                }
            }
            
            fetchData(url)
            
        }
          
          dispatch(StartSearch(0))
    }

    
    

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(changeUrl(`http://www.omdbapi.com?apikey=64405bd2&s=${title}`))
        dispatch(StartSearch(1))


    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTitle(e.target.value))
    }

  return (
    <>
        <Form onSubmit={handleSearch}>
            <Row> 
                <Col xs={10}>
                    <Form.Control type="text" onChange={handleChange}/>
                </Col>
                <Col xs={2}>
                    <Button variant="primary" type='submit'>
                        Search
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <Form.Text>
                        Enter film title
                    </Form.Text>
                </Col>
            </Row>
        </Form>
        <Row>
            <Col xs={12}>
                {loading && <Preloader />}
            </Col>
        </Row>
        <Row>
            <Col xs={12} className='cards'>
                <Cards />
            </Col>
        </Row>
    </>
  )
}
