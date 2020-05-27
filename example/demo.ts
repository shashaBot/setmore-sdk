import Setmore from '../build/main';

const setmoreClient = new Setmore();

// To get your refresh token: https://setmore.docs.apiary.io/#introduction/request-access-to-the-api
setmoreClient.setRefreshToken(process.env.SETMORE_REFRESH_TOKEN)

setmoreClient.staff.get({})
// tslint:disable-next-line: no-console
.then( value => console.log(value.data))
// tslint:disable-next-line: no-console
.catch( error => console.log(error))
