import { Address } from './address.model';
import { Company } from './company.model';

export interface User {
    id: number;
    name: string;
    username: string;
    phone: string;
    email: string;
    website: string;
    address: Address;
    company: Company;
}
