import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 400,
    },
  });

class EditString extends Component {
    state = ({
        thread_available_amount: '',
        thread_available_id: ''
    })
  componentDidMount() {
    this.props.dispatch( {type: 'FETCH_ALL_STRING_THIS_COLOR', payload: {string_color_id: this.props.match.params.id}} );
    }

    editString = (id) => {
        console.log('id', id);
        //TODO some logic to make sure it's actually a number, and not zero, and confirmation dialogs 
        //and regex
        this.props.dispatch( {type: 'EDIT_AVAILABLE_STRING', payload: { //TODO have this connnect
            thread_available_id: this.state.amount, //TODO this should really be the id from the value of the button
            thread_available_amount: this.state.amount}} );
    }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1>edit string page</h1>
        {JSON.stringify(this.props.match.params)}
        {JSON.stringify(this.props.reduxStore.thisColor)}
        {JSON.stringify(this.state)}
        <p>location</p>
        {JSON.stringify(this.props.location)}

        <p>
            this page needs a field and a better button, maybe we could even go back to where we were...?
        </p>
<Table>
    <TableHead>
        <TableRow>
            <TableCell>
                Location
            </TableCell>
            <TableCell>
                Amount
            </TableCell>
            <TableCell>
                Color
            </TableCell>
            <TableCell>
                Color Name
            </TableCell>
            <TableCell>
                Color Value
            </TableCell>
            <TableCell>
                Edit Amount
            </TableCell>
            <TableCell>
                Submit
            </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <Button
            onClick={() => console.log('this string color is', this.props.reduxStore.thisColor.color_id)}>
                Add A piece of this color string
            </Button>
        </TableRow>
        {/*TODO we should only show the edit button if the project number matches this project number */}
        {this.props.reduxStore.thisColor.map( item => (
            <TableRow key={item.thread_available_id}>
                <TableCell>
                    {item.project_name}
                </TableCell>
                <TableCell>
                {item.amount_available}
                </TableCell>
                <TableCell>
                    {item.color_number}
                </TableCell>
                <TableCell>
                    {item.color_name}
                </TableCell>
                <TableCell>
                    <div style={{
                    backgroundColor: `#${item.color_value}`,
                    height:'50px', 
                    width: '50px' }}>
                    </div>
                </TableCell>
                <TableCell>
                    <TextField 
                        label="amount available" 
                        type="number"
                        value={this.state.amount} 
                        onChange={(event, value) => (this.setState({
                            thread_available_id: item.thread_available_id,
                            amount: event.target.value}))}
                    />
                </TableCell>
                <TableCell>
                    <Button
                    onClick={() => this.editString(`${item.thread_available_id}`)}
                    >
                        Edit This String
                    </Button>
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>

        <Button 
          variant="contained" 
          onClick={() => this.props.history.push('/projectslist')}>
            Back to Projects List
        </Button>
      </div>
    );
  }
}



const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(EditString)));
