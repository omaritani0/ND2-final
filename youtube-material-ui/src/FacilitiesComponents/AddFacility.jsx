import {
  Button,
  Container,
  Fab,
  makeStyles,
  Typography,
  MenuItem,
  Modal,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddFacility = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <Typography variant="h4" gutterBottom component="div">
              بيع المنتجات الخاصة بك!
              </Typography>
              <TextField
                id="standard-basic"
                label="اسم المنتج"
                size="small"
                style={{ width: "100%" }}
              />
              <TextField
                id="standard-basic"
                label="سعر"
                size="small"
                style={{ width: "100%", marginTop: 20}}
              />
            </div>
            <div className={classes.item}>
            <TextField select label="الفئة" value = "مركبات">
                <MenuItem value="مركبات">مركبات</MenuItem>
                <MenuItem value="مفروشات">مفروشات</MenuItem>
                <MenuItem value="ملابس">ملابس</MenuItem>
                <MenuItem value="أحذية">أحذية</MenuItem>
                <MenuItem value="إلكترونيات">إلكترونيات</MenuItem>
                <MenuItem value="ألعاب">ألعاب</MenuItem>
                <MenuItem value="أدوات المطبخ">أدوات المطبخ</MenuItem>
                <MenuItem value="رياضة">رياضة</MenuItem>
                <MenuItem value="علم">علم</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                label="صف المنتج"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 60, marginTop: 50 }}
                onClick={() => setOpenAlert(true)}
              >
                انشئ
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginRight: 130, marginTop: 50 }}
                onClick={() => setOpen(false)}
              >
                إلغاء
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
        تم نشر منتجك بنجاح
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddFacility;
