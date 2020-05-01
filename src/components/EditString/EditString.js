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

  componentDidMount() {
    this.props.dispatch( {type: 'FETCH_ALL_STRING_THIS_COLOR', payload: {string_color_id: this.props.match.params.id}} );
    //TODO actually make this connect
    }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1>edit string page</h1>
        {JSON.stringify(this.props.match.params.id)}
        {JSON.stringify(this.props.reduxStore.thisColor)}
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
        {this.props.reduxStore.thisColor.map( item => (
            <TableRow>
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
                    <TextField />
                </TableCell>
                <TableCell>
                    <Button>Edit this string</Button>
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
