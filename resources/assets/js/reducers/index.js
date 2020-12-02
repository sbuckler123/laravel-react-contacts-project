import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import contactReducer from './contactReducer';
import randomReducer from './randomReducer';
import searchReducer from './searchReducer';


export default combineReducers({
    contacts: contactReducer,
    form: formReducer,
    random: randomReducer,
    search: searchReducer
});