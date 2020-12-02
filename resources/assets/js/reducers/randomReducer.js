import {
    FETCH_RANDOM_AVATAR,
    FETCH_RANDOM_USER,
    CHECK_CONTACT_EXIST
} from "../actions/types";
const INTIAL_STATE = {
    user: null,
    avatar: null
};
export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RANDOM_AVATAR:
            return { ...state, avatar: action.payload };
        case FETCH_RANDOM_USER:
            return { ...state, user: action.payload };

        default:
            return state;
    }
};
