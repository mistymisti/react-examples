import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should test the setStartDate method', () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should test the setEndDate method', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should test the setTextFilter method', () => {
    const result = setTextFilter('rent');
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should test the sortByAmount method', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should test the sortByDate method', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    });
});