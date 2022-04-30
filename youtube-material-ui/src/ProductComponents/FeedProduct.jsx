import { Container, makeStyles } from "@material-ui/core";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const FeedProduct = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Product title="صوفا للبيع ، هذه الأريكة بحالة مقبولة وتباع بـ 100 دولار فقط" img="https://cdn20.pamono.com/p/g/9/5/952849_1qq3vb36ge/antique-sofa-2.jpg"/>
      <Product title="قمصان للبيع ، التي تم ارتداؤها مرة واحدة فقط ، تباع بـ 35 دولارًا فقط" img="https://images.olx.com.lb/thumbnails/355919-400x300.jpeg"/>
      <Product title="أجهزة إلكترونية للبيع ، هذه الأجهزة الإلكترونية بحالة جيدة جدًا ولا تزال تعمل كالجديدة. تم بيع المجموعة الكاملة مقابل 200 دولار" img="https://images.olx.com.lb/thumbnails/4240477-400x300.jpeg"/>
    </Container>
  );
};

export default FeedProduct;
