import Appointment from './appointment';
import Customer from './customer';
import Service from './service';
import Staff from './staff';
import Timeslot from './timeslot';
import ApiClient from './apiClient';
import { AxiosInstance } from 'axios';

class Setmore {
  public readonly BASE_URI = 'https://developer.setmore.com/api/v1';
  public staff: Staff | undefined;
  public appointments: Appointment | undefined;
  public services: Service | undefined;
  public customers: Customer | undefined;
  public timeslots: Timeslot | undefined;
  public apiClient: AxiosInstance;

  constructor(refreshToken) {
    this.apiClient = ApiClient(this.BASE_URI, refreshToken)

    this.staff = new Staff(this.apiClient);
    this.appointments = new Appointment(this.apiClient);
    this.customers = new Customer(this.apiClient);
    this.timeslots = new Timeslot(this.apiClient);
    this.services = new Service(this.apiClient);

  }
}

export default Setmore;
