import { Grid, makeStyles } from "@material-ui/core";
import AddProduct from "./AddProduct";
import FeedProduct from "./FeedProduct";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const FacilityDisplay = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <FeedProduct />
        </Grid>
        <Grid item sm={3} className={classes.right}>
        </Grid>
      </Grid>
      <AddProduct />
    </div>
  );
};

export default FacilityDisplay;
