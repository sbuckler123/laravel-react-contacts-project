import api from "../apis/api";
import randomuser from "../apis/randomuser";
import {
    CREATE_CONTACT,
    FETCH_CONTACTS,
    FETCH_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    FETCH_RANDOM_AVATAR,
    FETCH_RANDOM_USER,
    SEARCH_TEXT,
    GENDER_ARR
} from "./types";
import history from "../history";

export const fetchContacts = () => async dispatch => {
    const response = await api.get("/contacts");

    dispatch({ type: FETCH_CONTACTS, payload: response.data });
};

export const fetchContact = id => async dispatch => {
    const response = await api.get(`/contacts/${id}`);
    dispatch({ type: FETCH_CONTACT, payload: response.data });
};

export const editContact = (id, formValues) => async dispatch => {
    const response = await api.put(`/contacts/${id}`, formValues);

    dispatch({ type: EDIT_CONTACT, payload: response.data });
    history.push("/");
};

export const deleteContact = id => async dispatch => {
    const response = await api.delete(`/contacts/${id}`);

    dispatch({ type: DELETE_CONTACT, payload: id });
    history.push("/");
};

export const createContact = formValues => async dispatch => {
    const response = await api.post("/contacts", formValues);

    dispatch({ type: CREATE_CONTACT, payload: response.data });
    history.push("/");
};

export const fetchRandomAvatar = () => {
    const randomGender = Math.floor(Math.random() * GENDER_ARR.length);
    const GENDER = GENDER_ARR[randomGender];
    const randomNum = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    const NUMBER = randomNum(0, 99);

    const response = `${randomuser.defaults.baseURL}/portraits/${GENDER}/${NUMBER}.jpg`;

    return { type: FETCH_RANDOM_AVATAR, payload: response };
};

export const fetchRandomUser = () => async dispatch => {
    const response = await randomuser.get("/");

    dispatch({ type: FETCH_RANDOM_USER, payload: response.data });
};

export const fetchAndCreateRandomUser = () => async (dispatch, getState) => {
    await dispatch(fetchRandomUser());
    const { user } = getState().random;
    const { name, phone, picture } = user.results[0];
    dispatch(
        createContact({
            name: `${name.first} ${name.last}`,
            title: name.title,
            phone: phone,
            avatar: picture.large
        })
    );
};

export const filterList = text => {
    return {
        type: SEARCH_TEXT,
        payload: text
    };
};
