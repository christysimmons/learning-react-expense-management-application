import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from "../../actions/auth"

const createMockStore = configureMockStore([thunk]);

test('should gnerate login action object', () => {
    const action = login('test123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'test123'
    });
});

test('should generate logout action object', () => {
    const action = logout({});
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});