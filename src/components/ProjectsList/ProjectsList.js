import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectsList extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'FETCH_PROJECTS'} );
    }

    render() {
        return (
            <div>
                <h1>Projects List</h1>
                {JSON.stringify(this.props)}
                <p> needs table and buttons from material ui.
                    once it's not the home page it needs a button to go home
                </p>
            </div>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToProps)(ProjectsList);
