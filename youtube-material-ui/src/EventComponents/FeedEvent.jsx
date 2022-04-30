import { Container, makeStyles } from "@material-ui/core";
import Event from "./Event";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const FeedEvent = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Event title="نظف حيك ، انضم إلى جيرانك لتنظيف حيك لجعله نظيفًا وصديقًا للبيئة" img="https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg"/>
      <Event title="نزهة مع جيرانك. انضموا إلى فترة ما بعد الظهيرة الرائعة مع جيرانكم وتعرفوا على بعضكم البعض ، بينما تستمتعون بالأطعمة والمشروبات الرائعة" img="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://lifeatpaintedprairie.com/wp-content/uploads/2021/08/denver-neighborhood-event-01-1920x1080-1.png"/>
      <Event title="تنبيه bake sale ، انضم إلى bake sale جارك واستمتع بموسيقى ووجبات خفيفة مذهلة." img="https://wp-eventmanager.com/wp-content/uploads/blog-images/2020/community-event-ideas-to-bring-together/3.jpg"/>
      {/* <Event title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Event title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Event title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </Container>
  );
};

export default FeedEvent;
