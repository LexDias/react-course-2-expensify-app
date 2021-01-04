import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpenseHandler, history, wrapper;

beforeEach(() => {
    addExpenseHandler = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpenseHandler={addExpenseHandler} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseHandler).toHaveBeenLastCalledWith(expenses[1]);
});

