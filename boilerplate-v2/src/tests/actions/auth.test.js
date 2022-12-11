import { login, logout } from '../../actions/auth';

test('test the login method of actions auth', () => {
    const result = login('abc123');
    expect(result).toEqual({
        type: 'LOGIN',
        uid: 'abc123'
    });
});

test('test the logout method of actions auth', () => {
    const result = logout();
    expect(result).toEqual({
        type: 'LOGOUT'
    });
});