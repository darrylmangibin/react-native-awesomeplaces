import { ADD_PLACE, SELECT_PLACE,
DELETE_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random.toString(),
          name: action.placeName,
          image : {
            uri: 'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
          }
        })
      };
      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter((place, i) => {
            return place.key !== state.selectedPlace.key
          }),
          selectedPlace: null
        }
      case SELECT_PLACE:
        return {
          ...state,
          selectedPlace: state.places.find((place, i) => {
            return place.key === action.placeKey
          })
        }
        case DESELECT_PLACE:
          return {
            ...state,
            selectedPlace: null
          }
    default:
      return state
  }
}

export default reducer