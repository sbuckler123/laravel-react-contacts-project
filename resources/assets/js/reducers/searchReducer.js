import { SEARCH_TEXT } from "../actions/types";
const INTIAL_STATE = {
  text: '',
}
export default (state = INTIAL_STATE, action) => {

    switch (action.type) {
        case SEARCH_TEXT:
          return {...state, text: action.payload}    ;


        default:
            return state;
    }
};
