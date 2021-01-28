import authReducer from '../../reducers/auth';

test('should set login info', () => {
    const state = authReducer(undefined, {
        type: 'LOGIN',
        uid: 'abc'
    });
    expect(state.uid).toBe('abc');
});

test('should set logout info', () => {
    const state = authReducer({ uid: 'abc' }, {
        type: 'LOGOUT'
    });
    expect(state).toEqual({});
});

