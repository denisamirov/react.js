import { CHANGE_PRICE, EDIT, 
    SET_USER_PRICE, CHANGE_NAME, 
    SET_USER_NAME, CREATE_CARD, 
    UPDATE_CARDS, ID } from "./actions";

const initialState = {
  value: [],
  userValue: '',
  name: [],
  userName: '',
  cards: [],
  edit: -1,
  id: 0 
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
    case CREATE_CARD: 
        return {
            ...state,
            cards: [...state.cards, {
                id: action.payload.cardId,
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
        const {id, userName, userValue} = action.payload;
        const updatedCards = state.cards.map(card => {
            if (card.id === id) {
                return {...card, ...{id:id, title:userName, price:userValue}};
            }
            return card;
        })
        return {...state, cards:updatedCards};
    default:
      return state;
  }
};

export default priceReducer;