import axios from 'axios';
import { GET_LAUNCHES } from './types';

const baseURl = 'https://api.spacexdata.com/v3';

export const getLaunches = () => async (dispatch) => {
  await axios.get(`${baseURl}/launches`)
    .then((res) => {
      dispatch({
        type: GET_LAUNCHES,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
