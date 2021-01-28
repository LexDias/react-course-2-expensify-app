import { login, logout } from '../../actions/auth';

test('Should setup login action object with uid', () => {
    const action = login('abc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc'
    })
});

test('Should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});

