import { Row } from "react-bootstrap"
import { Col } from 'react-bootstrap'
import Button from "react-bootstrap/esm/Button"
import { connect, useDispatch, useSelector } from "react-redux";
import changePrice from "../redux/changePrice";
import changeName from "../redux/changeName";
import createCard from "../redux/createCards";
import { SET_USER_NAME, SET_USER_PRICE } from "../redux/actions";
import { Form } from 'react-bootstrap'
import update_cards from "../redux/update_cards";
import edita from "../redux/edit";
import changeId from "../redux/changeId"

export const Add = () => {
    const dispatch = useDispatch();
    const { value: numberValue, userValue, userName, cards, edit: editStatus, id } = useSelector((state) => state.price);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(changePrice(userValue));
        dispatch(changeName(userName));
        dispatch(createCard(id, userName, userValue))
        dispatch(changeId(id))
        const number = editStatus.stateEdit
        if (Number(number) != -1) {
         dispatch(changeId(id))
         const cardsNew = {"id": id, "title":userName, "price":userValue}
         dispatch(update_cards(cardsNew))
        }
        dispatch(edita(-1))
        clean()
      }

    const handleChangePrice = (e) => {
            dispatch({
              type: SET_USER_PRICE,
              payload: e.target.value,
            });
    }

    const handleChangeName = (e) => {
        dispatch({
          type: SET_USER_NAME,
          payload: e.target.value,
        });
    }

    const clean = () => {
        document.getElementById("pri").value = "";
        document.getElementById("name").value = "";
    }
    
  return (
    <div>
        <Form onSubmit={submitHandler}>
            <Row>
                <Col><input type="text" onChange={handleChangeName} id="name"></input></Col>
                <Col><input id="pri" type="text" onChange={handleChangePrice}></input></Col>
                <Col><Button className="btn alarm" type="submit">save</Button></Col>
                <Col><Button variant="danger">cancel</Button></Col>
            </Row>
        </Form>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
      numberValue: state.price.value,
      userValue: state.price.userValue,
      users: state.price.name,
      cards: state.price.cards,
      user: state.price.userName,
      editStatus: state.price.edit
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }



  
  export default connect(
    mapStateToProps, mapDispatchToProps,
  )(Add);
