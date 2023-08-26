import { Row } from "react-bootstrap"
import { Col } from 'react-bootstrap'
import Button from "react-bootstrap/esm/Button"
import { connect, useDispatch, useSelector } from "react-redux";
import createCard from "../redux/createCards";
import { SET_USER_NAME, SET_USER_PRICE, FILTER } from "../redux/actions";
import { Form } from 'react-bootstrap'
import update_cards from "../redux/update_cards";
import edita from "../redux/edit";
import changeId from "../redux/changeId"

export const Add = () => {
    const dispatch = useDispatch();
    const { userValue, userName, edit, id } = useSelector((state) => state.price);

    const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const number = edit.stateEdit.stateEdit;
        if (Number(number) == 0) {
            const cardsNew = {id: edit.stateEdit.id, title:userName, price:userValue}
            dispatch(update_cards(cardsNew));
            dispatch(edita({stateEdit: 1, title: '', price: '', id: ''}));
        }
        else {
            dispatch(createCard( id, userName, userValue));
            dispatch(changeId(id));
        }

        document.getElementById('name').value = '';
        document.getElementById('pri').value = '';

        dispatch({
          type: FILTER,
          payload: ''
        });

    }

    const handleChangePrice = (e:React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: SET_USER_PRICE,
        payload: e.target.value,
      });
    }

    const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: FILTER,
        payload: e.target.value,
      });

      dispatch({
        type: SET_USER_NAME,
        payload: e.target.value,
      });
    }

  

    const handleCancel = () => {
      dispatch(edita({stateEdit: 1, title: '', price: '', id: ''}))
    }
    
  return (
    <div>
        <Form onSubmit={submitHandler}>
            <Row>
                <Col><input type="text" onChange={handleChangeName} id="name" required></input></Col>
                <Col><input id="pri" type="text" onChange={handleChangePrice} required></input></Col>
                <Col><Button className="btn alarm" type="submit">save</Button></Col>
                <Col><Button variant="danger" onClick={handleCancel} type="reset">cancel</Button></Col>
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
