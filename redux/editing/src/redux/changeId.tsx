import { ID } from "./actions"

const changeId = (id) => {
    return {
      type: ID,
      payload: id,
    }
  }

  export default changeId