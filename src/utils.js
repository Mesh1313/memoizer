import { AsyncStorage } from 'react-native';
import config from './config';

const getRequest = async ({ path }) => {
  //const token = await AsyncStorage.getItem('@stosstore:tkn');
  const options = new Request(`${config.apiUrl}/${path}`, {
    method: 'GET',
    // headers: new Headers({
    //     'x-access-token': token
    // })
  });
  return fetch(options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      return err;
    });
};

const postRequest = async ({ path, body }) => {
  // const token = await AsyncStorage.getItem('@stosstore:tkn');
  const options = new Request(`${config.apiUrl}/${path}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      // 'x-access-token': token
    }),
    body: JSON.stringify(body)
  });

  return fetch(options)
    .then(response => {
        return response.json();
    })
    .catch((err) => {
        return err;
    });
};

const deleteRequest = async ({ path }) => {
  const options = new Request(`${config.apiUrl}/${path}`, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      // 'x-access-token': token
    }),
  });

  return fetch(options)
    .then(response => {
        return response.json();
    })
    .catch((err) => {
        return err;
    });
}

const memoDisplayDateFormat = 'D/M/YYYY';

export {
  getRequest,
  postRequest,
  deleteRequest,
  memoDisplayDateFormat,
};