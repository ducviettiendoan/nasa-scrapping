import * as api from "../api/api";

export const getApod = () => async (dispatch) => {
  try {
    const response = await api.fetchApod();
    dispatch({ type: "FETCH_APOD", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTimeRange = (startDate, endDate) => async (dispatch) => {
  try {
    const response = { startDate: startDate, endDate: endDate };
    dispatch({ type: "UPDATE_RANGE", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};