
//set Text Filter action generator for each type
export const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

//sortBydate action generator
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const setStartDate = (startDate = '') => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate = '') => ({
    type: 'SET_END_DATE',
    endDate
});
