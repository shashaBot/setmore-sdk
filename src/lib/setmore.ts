import Appointment from './appointment';
import Auth from './auth';
import Customer from './customer';
import Service from './service';
import Staff from './staff';
import Timeslot from './timeslot';
import BaseApi from './base';

class Setmore {
  public staff: Staff | undefined;
  public appointments: Appointment | undefined;
  public services: Service | undefined;
  public customers: Customer | undefined;
  public timeslots: Timeslot | undefined;
  public auth: Auth;

  private apis: BaseApi[];

  constructor() {
    this.staff = new Staff();
    this.appointments = new Appointment();
    this.customers = new Customer();
    this.timeslots = new Timeslot();

    this.apis = [this.staff, this.appointments, this.customers, this.timeslots]
  }

  public setRefreshToken (token:string): void {
    this.apis.forEach( api => api.setRefreshToken(token))
  }

}

export default Setmore;
