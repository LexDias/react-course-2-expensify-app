import React from 'react';
import { shallow } from 'enzyme';
// importa o componente nao conectado ao store, para que se possa passar as props
import { ExpenseSummary } from '../../components/ExpensesSummary'; 
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});