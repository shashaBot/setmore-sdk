import Setmore from '../build/main';

// To get your refresh token: https://setmore.docs.apiary.io/#introduction/request-access-to-the-api
const setmoreClient = new Setmore(process.env.SETMORE_REFRESH_TOKEN);

setmoreClient.staff.get()
// tslint:disable-next-line: no-console
.then( value => console.log(value.data))
// tslint:disable-next-line: no-console
.catch( error => console.log(error))
