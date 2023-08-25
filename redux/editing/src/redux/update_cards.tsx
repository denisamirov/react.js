import { UPDATE_CARDS } from "./actions"

const update_cards = (cards) => {
    return {
      type: UPDATE_CARDS,
      payload: cards,
    }
  }

  export default update_cards