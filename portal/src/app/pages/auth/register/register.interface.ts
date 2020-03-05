
/** UserInterface */
export interface UserInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  ddd: string;
  phone: string;
  cep: string;
  street: string;
  number: string;
  city: string;
  uf: string;
  country: string;
  company: string;
  companyType: string;
  sector: string;
}

/** ErrorInterface */
export interface ErrorInterface {
  type: string;
  message: string;
}
