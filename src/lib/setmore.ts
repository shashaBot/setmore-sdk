import Appointment from './appointment';
import Auth from './auth';
import Customer from './customer';
import Service from './service';
import Staff from './staff';
import Timeslot from './timeslot';

class Setmore {
  public staff: Staff | undefined;
  public appointments: Appointment | undefined;
  public services: Service | undefined;
  public customers: Customer | undefined;
  public timeslots: Timeslot | undefined;
  public auth: Auth;

  private refreshToken: string | null = null;
  private accessToken: string | null = null;

  constructor() {
    this.auth = new Auth();
  }

  public async setRefreshToken (token:string) {
    this.refreshToken = token;
    await this.initialize(this.refreshToken);
  }

  private async initialize(refreshToken: string): Promise<void> {
    this.accessToken = await this.getAccessToken(refreshToken);
    this.staff = new Staff(this.accessToken);
    this.appointments = new Appointment(this.accessToken);
    this.services = new Service(this.accessToken);
    this.appointments = new Appointment(this.accessToken);
    this.customers = new Customer(this.accessToken);
    this.timeslots = new Timeslot(this.accessToken);
  }

  private async getAccessToken(refreshToken:string): Promise<string> {
    try {
      const response = await this.auth.get({ refreshToken });
      return (response.data.data.token.access_token as string);
    }
    catch(e) {
      // tslint:disable-next-line: no-console
      console.error(e)
      return 'blah';
    }
  }

}

export default Setmore;
