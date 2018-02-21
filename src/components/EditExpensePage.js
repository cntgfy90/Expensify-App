import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    handleSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    handleClick = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.handleSubmit}
                />
                <button onClick={this.handleClick}>
                    Remove
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    removeExpense: (data) => dispatch(removeExpense(data)),
    editExpense: (id, expense) => dispatch(editExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);