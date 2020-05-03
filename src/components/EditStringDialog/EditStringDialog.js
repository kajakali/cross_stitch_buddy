import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class EditStringDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (phrase) => {
    this.setState({ open: false });
    console.log('we want to', phrase)
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
          Slide in alert dialog
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {`Do you really want to mark this complete?
            project id: ${this.props.project_id}
            string item id: ${this.props.thread_available_id}`} 
            
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              If you do, click mark complete! Otherwise, click go back!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose('go back!')} color="primary">
              Go Back!
            </Button>
            <Button onClick={() => this.handleClose('mark it!')} color="primary">
              Mark Complete!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default EditStringDialog;