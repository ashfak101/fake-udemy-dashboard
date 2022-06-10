const initialState = {
  reviews: [],
};

export const reviewReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "REVIEW_FETCH":
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};
