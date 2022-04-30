import { Container, makeStyles } from "@material-ui/core";
import Facility from "./Facility";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const FeedFacility = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Facility title="رودسترز داينر" img="https://img1.beirut.com/GetImage/mainpicture/locale/142"/>
      <Facility title="صيدلية الحمرا" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-s8AdZb-X0GLqOMLo5OAyZT4gtmxGAMy6nwsDdJMYePW-LfWHv1vJQeTXjO_jrARxp8&usqp=CAU"/>
      <Facility title="صالة اتلانتس الرياضية" img="https://assets.gosawa.com/storage/32000/8800/59c580f4a9c1b51aea00d46c170f53b3.jpg"/>
    </Container>
  );
};

export default FeedFacility;
