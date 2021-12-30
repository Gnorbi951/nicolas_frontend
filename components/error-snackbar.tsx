import { Snackbar, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export type ErrorSnackbarProps = {
  open: boolean;
  setOpen: Function;
  message: string;
}

export default function ErrorSnackbar(props: ErrorSnackbarProps) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={() => {props.setOpen(false);}}
      message={props.message}
      action={(
        <>
          <Button color='secondary' size='small' onClick={() => {props.setOpen(false);}}>
            Close
          </Button>
          <IconButton size='small' aria-label='close' color='inherit' onClick={() => {props.setOpen(false);}}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </>
      )}
    />
  );
}