import moment from 'moment';
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
 
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                        filters = { filters }
                        setTextFilter = { setTextFilter }
                        sortByDate = { sortByDate }
                        sortByAmount = { sortByAmount }
                        setStartDate = { setStartDate }
                        setEndDate = { setEndDate } 
                />);
});

test('should test the editexpenselist filters page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should test the alt data filters with expenselistfilters', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

//should handle text change
//should sort by date
//should sort by amount
//should handle date changes
//should handle date focus change

test('should handle text change', () => {
    const textFilter = { 
        target : {
            value : 'hello'  
        } 
    };
    wrapper.find('input').prop('onChange')(textFilter); 
    expect(setTextFilter).toHaveBeenLastCalledWith('hello');
});

test('should sort by date', () => {
    const dateFilter = { 
        target : {
            value : 'date'  
        } 
    };
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').prop('onChange')(dateFilter);
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const amountFilter = { 
        target : {
            value : 'amount'  
        } 
    };
    wrapper.find('select').prop('onChange')(amountFilter);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const now = moment();
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: now, endDate: now });
    expect(setStartDate).toHaveBeenLastCalledWith(now);
    expect(setEndDate).toHaveBeenLastCalledWith(now);
});

test('should handle date focus changes', () => { 
    wrapper.find('DateRangePicker').prop('onFocusChange')(true);
    expect(wrapper.state('calendarFocused')).toBe(true);
});