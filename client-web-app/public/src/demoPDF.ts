'use strict'

//import {InvoiceGenerator} from './InvoiceGenerator'

const InvoiceGenerator = require('./InvoiceGenerator.ts')

const invoiceData = {
    addresses: {
        shipping: {
            name: 'John Doe',
            address: '2400 Fulton Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
            postalCode: 94118
        },
        billing: {
            name: 'John Doe',
            address: '2400 Fulton Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
            postalCode: 94118
        }
    },
    memo: 'As discussed',
    documentPrepareFor:[
        'Azhar',
        'Arwa Technologies',
        'azhar@arwatechnologies.com',
        '030069887555'],
    documentPrepareBy:[
        'Azhar',
        'Arwa Technologies',
        'azhar@arwatechnologies.com',
        '030069887555'
    ],
    franchisorRiskProfile:[
        'Pro Housepainting'
    ],
    items: [{
            itemCode: 12341,
            description: 'Laptop Computer',
            quantity: 2,
            price: 3000,
            amount: 6000
    }, {
            itemCode: 12342,
            description: 'Printer',
            quantity: 1,
            price: 2000,
            amount: 2000
        }
    ],
    subtotal: 8000,
    paid: 0,
    invoiceNumber: 1234,
    dueDate: 'Feburary 02, 2021'
}

const ig = new InvoiceGenerator(invoiceData)
ig.generate()
