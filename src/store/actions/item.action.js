import axios from "axios";

export const getItems = () => async (dispatch) => {
    try {
        let {data} = await axios.get("/marketplace/")
        dispatch({
            type: "GET_ITEMS",
            payload: data.items
        })
    } catch (err) {
        console.log(err)
    }
}
