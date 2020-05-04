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
import EditStringDialog from '../EditStringDialog/EditStringDialog';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 400,
    },
    addSkein: {
        backgroundColor: 'primary',
        whiteSpace: 'nowrap',
      },
  });

class ViewColor extends Component {
    state = ({
        thread_available_amount: '',
        thread_available_id: ''
    })
  componentDidMount() {
    this.props.dispatch( {type: 'FETCH_ALL_STRING_THIS_COLOR', payload: {string_color_id: this.props.match.params.color_id}} );
    }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1>edit string page</h1>
        {JSON.stringify(this.props.match.params)}
        {JSON.stringify(this.props.reduxStore.thisColor)}
        {JSON.stringify(this.state)}


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
            {/**TODO maybe only show the add skein button if there's not already a skein in the reducer that matches the project id */}
            <Button
            className={classes.addSkein}
        
            variant='contained'
            onClick={() => this.props.dispatch( {type: 'ADD_AVAILABLE_STRING_TO_PROJECT', payload: this.props.match.params} )}>
                Add a skein of this color string to this project
            </Button>
        </TableRow>
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
                {/*only allow editing of threads that are located here */}
                <TableCell>
 {/*                    {(item.project_id === item.thread_available_location) &&
                        <TextField 
                        label="amount available" 
                        type="number"
                        value={this.state.amount} 
                        onChange={(event, value) => (this.setState({
                            thread_available_id: item.thread_available_id,
                            amount: event.target.value}))}
                    />} */}
                </TableCell>
                <TableCell>
                    {(item.project_id === item.thread_available_location) &&
                    <EditStringDialog    
                    color_id={this.props.match.params.color_id}                 
                    project_id={item.project_id}
                    thread_available_id={item.thread_available_id}/>
                    
                    }
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>

        <Button 
          variant="contained" 
          onClick={() => this.props.history.push(`/project/${this.props.match.params.project_id}`)}>
            Back to Project
        </Button>
      </div>
    );
  }
}



const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(ViewColor)));