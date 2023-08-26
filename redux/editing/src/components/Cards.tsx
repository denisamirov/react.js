import { connect, useSelector, useDispatch } from "react-redux"
import { Row } from "react-bootstrap"
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import edita from "../redux/edit";
import { SET_USER_NAME, SET_USER_PRICE } from "../redux/actions";
import { DELETE, FILTER } from "../redux/actions";
import { card } from "../module/module";

export const Cards = () => {
   const dispatch = useDispatch();
    const { filter } = useSelector((state) => state.price);
    
    const handleGetData = (title:card, price:card, id:card) => {
        dispatch(edita({stateEdit: 0, title: title, price: price, id: id}))
        document.getElementById('name').value = title;
        document.getElementById('pri').value = price;
        
        dispatch({
          type: SET_USER_NAME,
          payload: title,
        });

        dispatch({
          type: SET_USER_PRICE,
          payload: price,
        });
        
    }

    const handleDelete = (id:number) => {
      dispatch({
        type: DELETE,
        payload: id,
      });

    
      dispatch({
        type: FILTER,
        payload: ''
      });

    } 
  
    
    return (
    <>
    <div className="cards">
        {filter.map(i => 
        <div key={i.id}>
            <Row>
                <Col>{i.title}</Col> 
                <Col>{i.price}</Col>
                <Col><Button onClick={() => handleGetData(i.title, i.price, i.id)}>edit</Button></Col>
                <Col><Button variant="danger" onClick={() => handleDelete(i.id)}>delete</Button></Col>
            </Row>
        </div>)}
    </div>
    </>
  )
}



const mapStateToProps = (state) => {
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
