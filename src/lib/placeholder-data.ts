import {Customer, Invoice} from "@/lib/definition";

const customers: Customer[] = [
    {
        id: '1',
        name: 'a',
        mail: 'a@gmail.com'
    },
    {
        id: '2',
        name: 'b',
        mail: 'b@gmail.com'
    },
];
const invoices: Invoice[] = [
    {
        id: '1a',
        customer_id: customers[0].id,
        amount: 15795,
        status: 'pending',
        date: '2022-12-06',
    },
    {
        id:'2b',
        customer_id: customers[1].id,
        amount: 20348,
        status: 'pending',
        date: '2022-11-14',
    },
];