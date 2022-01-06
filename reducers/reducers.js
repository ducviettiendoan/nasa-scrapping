const initialState = {
  loading: true,
  error: "",
  pictures: [],
  reload: false,
};

const pictures = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_APOD":
      return {
        ...state,
        loading: false,
        pictures: action.payload.data
      };
    default:
      return state;
  }
};

export default pictures;