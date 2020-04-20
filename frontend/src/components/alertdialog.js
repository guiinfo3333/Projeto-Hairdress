import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {FiTrash2} from 'react-icons/fi';
export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <FiTrash2 size={20} color="#a8a8b3" onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hairdress diz"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja mesmo realizar esta ação, ela depois  não poderá ser desfeita ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           sim
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}