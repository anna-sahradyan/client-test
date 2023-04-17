//?getAllUsers
import {END_LOADING, FETCH_ALL, START_LOADING,DELETE} from "../constants/actionTypes";
import * as api from "../api";

export const getUsers = (page) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data:{data,currentPage,numberOfPages}} = await api.fetchUsers(page);
        console.log(data)
        dispatch({type: FETCH_ALL, payload: { data, currentPage, numberOfPages }});
        dispatch({type: END_LOADING});
    } catch (err) {
        console.log(err.message)
    }


}
//?deleteUser
export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({type: DELETE, payload: id})
    } catch (err) {
        console.log(err)
    }
}