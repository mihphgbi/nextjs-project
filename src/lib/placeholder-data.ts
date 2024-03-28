import {Customer, Invoice} from "@/model/definition";

const customers: Customer[] = [
    {
        id: '1',
        name: 'a',
        email: 'a@gmail.com',
        image_url: ''
    },
    {
        id: '2',
        name: 'b',
        email: 'b@gmail.com',
        image_url: ''
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