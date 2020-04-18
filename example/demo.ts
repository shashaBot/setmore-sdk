import { AxiosResponse } from 'axios';
import Setmore from '../build/main';

const setmoreClient = new Setmore();

// To get your refresh token: https://setmore.docs.apiary.io/#introduction/request-access-to-the-api
setmoreClient.setRefreshToken('<your-setmore-refresh-token').then(() => {
  // tslint:disable-next-line: no-console
  console.log(setmoreClient.staff.accessToken)
  // tslint:disable-next-line: ban-comma-operator
  return Promise.all([setmoreClient.staff.get({})])
})
// tslint:disable-next-line: no-console
.then( value => console.log((value as AxiosResponse[])[0].data.data)).catch( error => console.log(error))
