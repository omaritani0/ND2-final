import { Container, makeStyles } from "@material-ui/core";
import Job from "./Job";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const FeedJob = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Job title="مطلوب جليسة أطفال ، هناك حاجة إلى جليسة أطفال لطفلي. الأجر حوالي 15 دولارًا في الساعة. تواصل مع هذا الرقم 70987654." img="https://st2.depositphotos.com/1030387/10908/v/600/depositphotos_109083458-stock-illustration-baby-sitter-reading-to-children.jpg"/>
      <Job title="جز العشب ، وتقديم وظيفة لقص العشب للمراهقين الذين يسعون لكسب أموالهم من الجيب. الأجر 6 دولارات للساعة. الاتصال 78908765" img="https://st4.depositphotos.com/3284283/21820/v/1600/depositphotos_218204022-stock-illustration-man-lawn-mower-cartoon.jpg"/>
      <Job title="كلاب تمشية ، وظيفة لتمشية كلابي مقابل 10 دولارات للساعة. الاتصال 76543225" img="https://img.freepik.com/free-vector/cartoon-illustration-young-man-walking-dog-outdoor-park_253349-1159.jpg"/>
      {/* <Job title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Job title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Job title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </Container>
  );
};

export default FeedJob;
