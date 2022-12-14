import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSelectChange = (e) => { 
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount() 
    };
    render() {
        return (
            <div>
            <input type="text" value = { this.props.filters.text } onChange = { this.onTextChange } />
            <select onChange = { this.onSelectChange }>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
            startDate = { this.props.filters.startDate }
            endDate = { this.props.filters.endDate }
            onDatesChange = { this.onDatesChange }
            focusedInput = { this.state.calendarFocused }
            onFocusChange = { this.onFocusChange }
            showClearDates={ true }
            numberOfMonths={ 1 }
            isOutsideRange={ () => false }
            />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);