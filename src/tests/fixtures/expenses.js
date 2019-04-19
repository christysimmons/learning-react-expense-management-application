import moment from 'moment';

export default [{
    id: '01',
    description: 'Sandwich',
    note: 'It was a good sandwich',
    amount: 1100,
    createdAt: 0
},{
    id: '02',
    description: 'Hat',
    note: 'I needed a hat',
    amount: 2200,
    createdAt: moment(0).subtract(200, 'days').valueOf()
},
{
    id: '03',
    description: 'Beer bar',
    note: 'Good beer. Too much of it.',
    amount: 3300,
    createdAt: moment(0).subtract(20, 'days').valueOf()
},
{
    id: '04',
    description: 'Power bill',
    note: '',
    amount: 4400,
    createdAt: moment(0).add(200, 'days').valueOf()
},
{
    id: '05',
    description: 'Groceries',
    note: 'St Martin\'s store',
    amount: 5500,
    createdAt: moment(0).add(500, 'days').valueOf()
}]