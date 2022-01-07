const initialState = {
  loading: true,
  error: "",
  pictures: [],
  //default url
  urlGetApod: `https://api.nasa.gov/planetary/apod?start_date=2022-01-01&end_date=2022-01-06&api_key=kvNnQd5AKI44QXcEwD58x9xy7EnODFmnsCJScNk9`,
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
    case "UPDATE_RANGE":
      return {
        ...state,
        urlGetApod: `https://api.nasa.gov/planetary/apod?start_date=${action.payload.startDate}&end_date=${action.payload.endDate}&api_key=kvNnQd5AKI44QXcEwD58x9xy7EnODFmnsCJScNk9`,
        reload: !state.reload,
      };
    default:
      return state;
  }
};

export default pictures;