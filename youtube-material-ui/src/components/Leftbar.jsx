import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
  Router,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>الصفحة الرئيسية</Typography>
      </div>
      <div className={classes.item}>
        <Link to="/JobDisplay">
          <Person className={classes.icon} />
          <Typography className={classes.text}>وظائف</Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/ProductDisplay">
          <Storefront className={classes.icon} />
          <Typography className={classes.text}>السوق</Typography>
        </Link>
      </div>
      <div>
        <Link to="/EventDisplay">
          <Storefront className={classes.icon} />
          <Typography className={classes.text}>مناسبات</Typography>
        </Link>
      </div>
      <div>
        <Link to="/EventDisplay">
          <Storefront className={classes.icon} />
          <Typography className={classes.text}>خدمات</Typography>
        </Link>
      </div>
    </Container>
  );
};

export default Leftbar;
