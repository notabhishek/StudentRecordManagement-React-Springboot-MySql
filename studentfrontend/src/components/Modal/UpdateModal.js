import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(props.student.name);
  const [address, setAddress] = React.useState(props.student.address);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Student id: {props.student.id} </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit and click Update to update.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Student name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.student.name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Student Address"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.student.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {props.onclick(props.student.id , name, address); handleClose(); }}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
