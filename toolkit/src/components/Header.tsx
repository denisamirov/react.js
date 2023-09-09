import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { favouriteState } from '../store/cardsSlice'

export const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleFavourite = (state:boolean, url:string) => {
    navigate(url)
    dispatch(favouriteState(state))
  }

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link onClick={() => handleFavourite(false, '/')}>Search</Nav.Link>
                <Nav.Link onClick={() => handleFavourite(true, '/favourite')}>Favorites</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}
