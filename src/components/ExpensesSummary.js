import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total.js';
import expenses from '../selectors/expenses';

export const ExpenseSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing {props.expensesCount} {expenseWord} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);
