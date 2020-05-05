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

class ThreadList extends Component {

  componentDidMount() {
    this.props.dispatch( {type: 'FETCH_ALL_THREADS'} );
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
          <h1>Threads List!</h1>



        <Table className={classes.table} size='small' aria-label='a table of all the threads'>
          <TableHead>
            <TableRow>
              <TableCell>Color Number</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Color Name</TableCell>
              <TableCell>Amount Required</TableCell>
              <TableCell>Amount Available</TableCell>
              <TableCell>Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.reduxStore.entireThreadList 
            && this.props.reduxStore.entireThreadList.map(
                item => (
                    <TableRow key={item.id}>
                        <TableCell>
                            {item.number}
                        </TableCell>
                        <TableCell>
                            <div style={{
                            backgroundColor: `#${item.color_value}`,
                            height:'10px', 
                            width: '20px' }}>
                            </div>
                        </TableCell>
                        <TableCell>
                            {item.color_name}
                        </TableCell>
                        <TableCell>
                            {item.needed}
                        </TableCell>
                        <TableCell>
                            {item.available}
                        </TableCell>
                    </TableRow>
                )
            )}


          </TableBody>
        </Table>
        <Button
        color='primary'
        variant='contained'
        onClick={() => this.props.history.push('/home')}
      >
        Home
      </Button>
      </div>
    );
  }
}

  


const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(ThreadList)));
