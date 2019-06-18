import axios from 'axios';
import { LAUNCHES_LOADED } from './types';

const baseURl = 'https://api.spacexdata.com/v3/'

export const getLaunches = async() => (dispatch, getState) => {
      // Loading SpaceX Launches

      axios.get(`${baseURl}/launches`)
      .then(res => {
            console.log(res.data)
            dispatch({
                  type: LAUNCHES_LOADED,
                  payload: res.data
            })
      })
      .catch(err => {
            console.log(err.message)
      })

} 