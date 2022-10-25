//filter reducer with definitions to each action Type
const filtersReducerDefaultState = [{ text : '', sortBy: 'date', startDate: undefined, endDate: undefined }];
// Filter reducer runs when a dispatch event is triggered by store
export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            console.log("ActionText :: "+action.text);
            console.log("State Text :: "+state.text);
            return {
                ...state,
                text: action.text
            };
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'   
                };
            case 'SORT_BY_AMOUNT':
                console.log('sortbyamount called !!');
                return {
                    ...state,
                    sortBy: 'amount'   
                };
            case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.startDate ? action.startDate : undefined
                };
            case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate ? action.endDate : undefined
                };
            default : 
                return state;
    };        
};