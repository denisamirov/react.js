import { connect, useSelector, useDispatch } from "react-redux"
import { Row } from "react-bootstrap"
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import edita from "../redux/edit";


export const Cards = () => {
   const dispatch = useDispatch();
    const { value: numberValue, name: users, cards, edit } = useSelector((state) => state.price);
    
    const handleGetData = (e) => {
        const number = (e.target.id).slice(5,);
        const obj = cards.find(item => item.cardId == number);
        document.getElementById('name').value = obj.title;
        document.getElementById('pri').value = obj.price;
        dispatch(edita(1))
    }
  
    return (
    <>
    <div className="cards">
        {cards.map(i => 
        <div key={i.id}>
            <Row>
                <Col>{i.title}</Col> 
                <Col>{i.price}</Col>
                <Col><Button id={'edit-' + i.id} onClick={handleGetData}>edit</Button></Col>
                <Col><Button id={'del-' + i.id} variant="danger">delete</Button></Col>
            </Row>
        </div>)}
    </div>
    </>
  )
}



const mapStateToProps = (state, props) => {
    return {
      numberValue: state.price.value,
      userValue: state.price.userValue,
      users: state.price.name,
      user: state.price.userName,
      cards: state.price.cards
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }
  
  export default connect(
    mapStateToProps, mapDispatchToProps,
  )(Cards);
