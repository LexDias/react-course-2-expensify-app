import React from 'react';
import { shallow } from 'enzyme';
// importa o componente nao conectado ao store, para que se possa passar as props
import { ExpenseSummary } from '../../components/ExpensesSummary'; 

test('should render ExpenseSummary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={295} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={23} expensesTotal={29532424} />);
    expect(wrapper).toMatchSnapshot();
});