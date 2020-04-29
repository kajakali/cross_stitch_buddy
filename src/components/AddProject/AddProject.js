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
import Autocomplete from '@material-ui/lab/Autocomplete';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
  });

class AddProject extends Component {

    state = {
        projectName: '',
        color: '',
        amount: ''
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    componentDidMount() {
      this.props.dispatch( {type: 'FETCH_PROJECT_BEING_ADDED'} );
      this.props.dispatch( {type: 'FETCH_POSSIBLE_STRINGS'} );
    }
  

    addStringButton = () => {
        console.log('add this string!', this.state.color);
    }

    backToListButton = () => {
        this.props.history.push('/projectslist');
    }
    submitProjectName = () => {
        console.log('the name to submit is: ', this.state.projectName);
      if(this.props.reduxStore.projectBeingAdded.project_name) {
        console.log('I already Had a name!!!');
      }
      else{
        console.log('i needed a name!');   
        //  this.props.dispatch( {type: 'ADD_PROJECT_NAME', payload: {projectName: this.state.projectName}});
      }
    }
    changeProjectName = () => {
      console.log('delete this project name');
      //make a delete route that removes the project details associated with this
    }
    addColor = () => {
      console.log('add this color!', this.state.color.id, this.state.amount);
      this.props.dispatch( {type: 'ADD_NEEDED_STRING', payload: {
        color_id: this.state.color.id, 
        amount: this.state.amount,
        project_id: this.props.reduxStore.projectBeingAdded.id
      }} );
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1>Add Project Page!!!</h1>
                {JSON.stringify(this.state)}
                {JSON.stringify(this.props.reduxStore.stringsNeeded)}
                <p> this page will let you make a new project
                </p>
{ !this.props.reduxStore.projectBeingAdded.project_name && 
          <>


          </> }
        <div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            {this.props.reduxStore.projectBeingAdded.project_name ? 
            <>
              <TableCell>
                {this.props.reduxStore.projectBeingAdded.id}
              </TableCell>
              <TableCell align="right">
                {this.props.reduxStore.projectBeingAdded.project_name}
              </TableCell>
              <TableCell align="right">
              </TableCell>
              <TableCell align="right">
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={this.changeProjectName}>Change my Project Name
                </Button>
              </TableCell> 
            </>
            : 
            <>
            <TableCell>
              <TextField
                id="projectName"
                label="Project Name"
                className={classes.textField}
                value={this.state.projectName}
                onChange={this.handleChange('projectName')}
                margin="normal"
              />
            </TableCell>
            <TableCell align="right">
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={this.submitProjectName}>Name my Project
              </Button>
            </TableCell>
            <TableCell align="right">

            </TableCell>
            <TableCell align="right">

            </TableCell>
          </>}

            </TableRow>
          </TableHead>
        <TableBody>

                
{/*                 {this.props.projectBeingAdded && this.props.projectBeingAdded.map(item => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.number}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"><Button variant="contained" onClick={this.addStringButton}>Add New Project</Button></TableCell>
      
                  </TableRow>
                ))} */}
                <TableRow>
                  <TableCell>
                    <Autocomplete
                      id="color-combo-box"
                      options={this.props.reduxStore.possibleStrings}
                      value={this.state.color}
                      getOptionLabel={(option) => option.number}
                      style={{ width: 300 }}
                      onChange={(event, value) => this.setState({
                        color: value
                      })}
                      renderInput={(params) => <TextField {...params} label="Color" variant="outlined" />}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField 
                    label="amount needed" 
                    value={this.state.amount} 
                    onChange={(event, value) => this.setState({
                      amount: event.target.value})}/>
                  </TableCell>
                  <TableCell>
                    add color button
                    <Button
                      variant="contained"
                      onClick={this.addColor}
                    >
                      Add Color
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow key='add'>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell><Button variant="contained">Mark Project Complete</Button></TableCell>
                </TableRow>
              </TableBody>
      </Table>
        </div>



{JSON.stringify(this.props.reduxStore.projectBeingAdded.project_name)}



    
{/*       <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell align="right">Amount Required</TableCell>
            <TableCell align="right">Amount Available</TableCell>
            <TableCell align="right">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

                
                {this.props.stringsNeeded.length > 0 && this.props.stringsNeeded.map(item => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.number}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"><Button variant="contained" onClick={this.addStringButton}>Add New Project</Button></TableCell>
      
                  </TableRow>
                ))}
 
                <TableRow key='add'>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell><Button variant="contained">Mark Project Complete</Button></TableCell>
                </TableRow>
              </TableBody>
      </Table> */}
<Button variant="contained" onClick={this.backToListButton}>Back to Projects List</Button>
            </div>
        );
    }
}

AddProject.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(AddProject)));
