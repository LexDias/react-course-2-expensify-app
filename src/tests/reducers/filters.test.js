import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'abc'
    });
    expect(state.text).toBe('abc');
});

test('should set startDate filter', () => {
    const date = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        date
    });
    expect(state.startDate).toEqual(date);
});

test('should set endDate filter', () => {
    const date = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        date
    });
    expect(state.endDate).toEqual(date);
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

