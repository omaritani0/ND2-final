import { Grid, makeStyles } from "@material-ui/core";
import { Routes } from "react-router-dom";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import JobDisplay from "./JobComponents/JobDisplay.jsx";
import ProductDisplay from "./ProductComponents/ProductDisplay.jsx";
import EventDisplay from "./EventComponents/EventDisplay.jsx";
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthContext, { AuthProvider } from './context/AuthContext'


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  let { authTokens } = useContext(AuthContext);
  if (authTokens == null) {
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/", 7)) + "login";
  } else {
    return (
      <div>
        <Navbar />
        <Grid container>
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Feed />
          </Grid>
          <Grid item sm={3} className={classes.right}>
            <Rightbar />
          </Grid>
        </Grid>
        <Add />
      </div>
    );
  }
};
const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/Add",
    component: Add
  },
  {
    path: "/Feed",
    component: Feed,
  },
  {
    path: "/Leftbar",
    component: Leftbar,
  },
  {
    path: "/Navbar",
    component: Navbar,
  },
  {
    path: "/Rightbar",
    component: Rightbar,
  },
  {
    path: "/JobDisplay",
    component: JobDisplay,
  },
  {
    path: "/ProductDisplay",
    component: ProductDisplay,
  },
  {
    path: "/EventDisplay",
    component: EventDisplay,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Register",
    component: Register,
  }
];

function RouteWithSubRoutes(route, key) {
  return (
    <Route
      key={key}
      path={route.path}
      element={<route.component />}
    />
  );
}

export default function RouteConfig() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((route, i) => (
            RouteWithSubRoutes(route, i)
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}
