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
      <Facility title="صوفا للبيع ، هذه الأريكة بحالة مقبولة وتباع بـ 100 دولار فقط" img="https://cdn20.pamono.com/p/g/9/5/952849_1qq3vb36ge/antique-sofa-2.jpg"/>
      <Facility title="قمصان للبيع ، التي تم ارتداؤها مرة واحدة فقط ، تباع بـ 35 دولارًا فقط" img="https://images.olx.com.lb/thumbnails/355919-400x300.jpeg"/>
      <Facility title="أجهزة إلكترونية للبيع ، هذه الأجهزة الإلكترونية بحالة جيدة جدًا ولا تزال تعمل كالجديدة. تم بيع المجموعة الكاملة مقابل 200 دولار" img="https://images.olx.com.lb/thumbnails/4240477-400x300.jpeg"/>
      {/* <Facility title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Facility title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Facility title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </Container>
  );
};

export default FeedFacility;
