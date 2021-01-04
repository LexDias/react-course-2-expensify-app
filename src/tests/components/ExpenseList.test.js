import React from 'react';
import { shallow } from 'enzyme';
// importa o componente nao conectado ao store, para que se possa passar as props
import { ExpenseList } from '../../components/ExpenseList'; 
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});