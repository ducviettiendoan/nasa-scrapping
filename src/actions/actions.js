import * as api from "../api/api";

export const getApod = () => async (dispatch) => {
  try {
    const response = await api.fetchApod();
    dispatch({ type: "FETCH_APOD", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};
