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
      <Product title="Choose the perfect design" img="https://cdn20.pamono.com/p/g/9/5/952849_1qq3vb36ge/antique-sofa-2.jpg"/>
      <Product title="Simply Recipes Less Stress. More Joy" img="https://images.olx.com.lb/thumbnails/355919-400x300.jpeg"/>
      <Product title="What To Do In London" img="https://images.olx.com.lb/thumbnails/4240477-400x300.jpeg"/>
      {/* <Product title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Product title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Product title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </Container>
  );
};

export default FeedProduct;
