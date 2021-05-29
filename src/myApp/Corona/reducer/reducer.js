//
import { GET_CORONA_ALL, GET_CORONA_ALL_OPTION, GET_CORONA_DETAIL_ALL } from "./../constant/corona";
import { GET_CORONA_COUNTRY } from './../constant/corona';

export const reducer = (state, action) => {
  // var {
  //   store: {
  //     // item,
  //   },
  // } = state;

  switch (action.type) {
    case GET_CORONA_ALL:
      state = {
        ...state,
        store: {
          item: action.payload,
        },
      };
      return state;
    case GET_CORONA_ALL_OPTION:
 
      state = {
        ...state,
        stores: {
          dataOption: action.payload,
        },
      };
      return state;
      case GET_CORONA_COUNTRY:
 
        state = {
          ...state,
          country:action.payload
        };
        return state;

        case GET_CORONA_DETAIL_ALL:
 
          state = {
            ...state,
            detail:action.payload
          };
          return state;
    default:
      return state;
  }
};
