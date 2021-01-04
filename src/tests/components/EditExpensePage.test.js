import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseHandler, removeExpenseHandler, history, wrapper;

beforeEach(() => {
    editExpenseHandler = jest.fn();
    removeExpenseHandler = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[1]} 
            editExpenseHandler={editExpenseHandler} 
            removeExpenseHandler={removeExpenseHandler} 
            history={history} 
        />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseHandler).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseHandler).toHaveBeenLastCalledWith(expenses[1].id);
});