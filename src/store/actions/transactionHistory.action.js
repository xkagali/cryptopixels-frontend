import axios from "axios";
import {useParams} from "react-router-dom";

export const getTransactionHistory = () => async (dispatch) => {
    const {id} = useParams()
    try {
        let {data} = await axios.get(`/item/${id}`)
        dispatch({
            type: "GET_HISTORY",
            payload: data.items
        })
    } catch (err) {
        console.log(err)
    }
}
