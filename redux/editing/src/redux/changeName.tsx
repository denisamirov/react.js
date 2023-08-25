import { CHANGE_NAME } from "./actions"

const changeName = (name) => {
    return {
      type: CHANGE_NAME,
      payload: name,
    }
  }

  export default changeName