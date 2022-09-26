import { LOGIN } from "../actions/authActions";

// const initialValue = {
//   authItems,
// };

function authReducer(state={}, { type, payload }) {
  
  switch (type) {
    case LOGIN:
      console.log("reducer")
      return {
        ...state,
        authItems:{
          ...payload,
          isLogin:true
        }
      };

    default:
      return { ...state };
  }
}

export default authReducer;
