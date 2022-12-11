import authReducer from '../../reducers/auth';

test('should run expenses reducer test', () => {
    const result = authReducer(undefined, '@@INIT');
    expect(result).toEqual({});    
});

test('should test the LOGIN method', () => {
    const action = {
        type: 'LOGIN',
        uid : '1'
    };
    const result = authReducer(undefined, action)
    expect(result).toEqual({
        uid: action.uid
    });
});

test('should test the LOGOUT method', () => {
    const action = {
        type: 'LOGOUT'
    };
    const result = authReducer(undefined, action);
    expect(result).toEqual({});
});