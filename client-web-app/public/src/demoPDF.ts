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
        'Susan McKay', 
        'Home Pro LLC dba', 
        'Pro Housepainting',
        '88 Wood Dr',
        'Houston Tx 77039'],
    documentPrepareBy:[
        'Wade Millward',
        'Rikor Insurance Consultancy',
        'wade.milward@rikor.io',
        '801-210-0406'
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