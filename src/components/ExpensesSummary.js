import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total.js';

export const ExpenseSummary = (props) => (
    <div>
        <h1>Viewing {props.expenses.length} expenses totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</h1>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseSummary);
