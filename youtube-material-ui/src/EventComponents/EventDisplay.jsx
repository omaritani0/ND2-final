import { Grid, makeStyles } from "@material-ui/core";
import AddEvent from "./AddEvent";
import FeedEvent from "./FeedEvent";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const EventDisplay = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <FeedEvent />
        </Grid>
        <Grid item sm={3} className={classes.right}>
        </Grid>
      </Grid>
      <AddEvent />
    </div>
  );
};

export default EventDisplay;