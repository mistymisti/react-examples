import moment from 'moment';

export default  [{
    id : '1',
    description: 'Gum',
    amount: 0,
    note: '',
    createdAt: 0
}, {
    id : '2',
    description: 'Rent',
    amount: 1000,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id : '3',
    description: 'Cred',
    amount: 109500,
    note: '',
    description: 'test default',
    createdAt: moment(0).add(4, 'days').valueOf()
}];