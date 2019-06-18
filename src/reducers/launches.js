import { GET_LAUNCHES } from '../actions/types';


const INITIAL_STATE = {
      launches: []
}

export default function (state = INITIAL_STATE, action) {
      switch (action.type) {
            case GET_LAUNCHES: {
                  return {
                        ...state,
                        leads: action.payload
                  }
            }
            default: 
            return state;
      }
}