import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('should test the default filters reducers state', () => {
    const result = filtersReducers(undefined, '@@INIT');
    expect(result).toEqual({
            text : '', 
            sortBy: 'date', 
            startDate: moment().startOf('month'), 
            endDate: moment().endOf('month') 
    });
});

test('should test the sort by amount reducers state', () => {
    const state = filtersReducers(undefined, {type : 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should test the sort by amount reducers state', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment(),
        endDate: undefined
    };
    const state = filtersReducers(currentState, { type : 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should test the set text filter reducers state', () => {
    const state = filtersReducers(undefined, { type: 'SET_TEXT_FILTER', text : 'input'});
    expect(state.text).toBe('input');
});

test('should test the set startdate filter reducers state', () => {
    const state = filtersReducers(undefined, { type: 'SET_START_DATE', startDate : moment(0) });
    expect(state.startDate.valueOf()).toBe(moment(0).valueOf());
});

test('should test the set enddate filter reducers state', () => {
    const state = filtersReducers(undefined, { type: 'SET_END_DATE', endDate : moment(0) });
    expect(state.endDate.valueOf()).toBe(moment(0).valueOf());
});