import { CHANGE_PRICE, EDIT, 
    SET_USER_PRICE, CHANGE_NAME, 
    SET_USER_NAME, CREATE_CARD, 
    UPDATE_CARDS, ID, FILTER, DELETE } from "./actions";

const initialState = {
  value: [],
  userValue: '',
  name: [],
  userName: '',
  cards: [],
  edit: {stateEdit: 1, title: '', price: '', id: ''},
  id: 0,
  filter: []
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE:
        return {
            ...state,
            value: [...state.value, action.payload]
        }
    case SET_USER_PRICE:
        return {
            ...state,
            userValue: action.payload,
        }
    case CHANGE_NAME:
        return {
            ...state,
            name: [...state.name, action.payload]
        }
    case SET_USER_NAME:
        return {
            ...state,
            userName: action.payload
        }
    case ID:
        return {
            ...state,
            id: action.payload + 1
        }
    case DELETE:
        return {
            ...state,
            cards: state.cards.filter((card) => card.id !== action.payload)
        }
    case FILTER: 
        return {
            ...state,
            filter: state.cards.filter(card => card.title.includes(action.payload))
        }
    case CREATE_CARD: 
        return {
            ...state,
            cards: [...state.cards, {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price
            }]
        }
    case EDIT: 
        return {
            ...state,
            edit: action.payload
        }
    case UPDATE_CARDS: 
        const {id, title, price} = action.payload
        return {...state, 
            cards: state.cards.map(card => 
                card.id === id ? {id:id, title:title, price:price} : card )
        };
    default:
      return state;
  }
};

export default priceReducer;