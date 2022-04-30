import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="اختر التصميم المثالي" img="https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg"/>
      <Post title="ببساطة وصفات أقل إجهادًا. المزيد من الفرح" img="https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="ماذا تفعل في لندن" img="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="الوصفات التي ستجعلك تتوق أكثر" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="دليل السفر المختصر إلى مانهاتن" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="أفعال قاتلة لتعزيز ثقتك بنفسك" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </Container>
  );
};

export default Feed;
