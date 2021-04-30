
/** UserInterface */
export interface UserInterface {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  cep: string;
  street: string;
  district: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  company_name: string;
  company_type: string;
  company_activity: string;
}

/** ErrorInterface */
export interface ErrorInterface {
  type: string;
  message: string;
}
