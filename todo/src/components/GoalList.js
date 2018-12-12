import React from "react";
import { addGoal, toggleGoal } from "../actions";
import { connect } from "react-redux";

class GoalListContainer extends React.Component {
    state = {
        newGoal: ''
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddGoal = e => {
        e.preventDefault();
        this.props.addGoal(this.state.newGoal);
        this.setState({
            newGoal: ''
        })
    };

    handleToggleGoal = index => {
        this.props.toggleGoal(index);
    };

    render() {
        return (
            <div>
                {this.props.goals.map((goal, index) => ( 
                    <h2 onClick={() => this.handleToggleGoal(index)} key={goal.newGoal}>
                        {goal.newGoal}
                    </h2>
                ))}

                <input 
                    type='text'
                    name='newGoal'
                    onChange={this.handleChanges}
                    placeholder='New Goal for World Domination'
                    value={this.state.newGoal}
                    autoComplete='off'
                />
                <button className='btn' onClick={this.handleAddGoal}>Add Goal</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        title: state.title,
        goals: state.goals
    };
}

const withState = connect(
    mapStateToProps,
    {
        addGoal,
        toggleGoal
    }
);

const GoalList = withState(GoalListContainer);

export default GoalList;