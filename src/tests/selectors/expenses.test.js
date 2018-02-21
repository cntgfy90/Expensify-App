import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expense';
import moment from 'moment';



const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

test('should filter by text value', () => {
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
    const filtersInner = {
        ...filters,
        text: '',
        startDate: moment(0)
    };
    const result = selectExpenses(expenses, filtersInner);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
    const filtersInner = {
        ...filters,
        text: '',
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filtersInner);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filtersInner = {
        ...filters,
        text: ''
    };
    const result = selectExpenses(expenses, filtersInner);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
});

test('should sort by amount', () => {
    const filtersInner = {
        ...filters,
        text: '',
        sortBy: 'amount'
    };
    const result = selectExpenses(expenses, filtersInner);
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
