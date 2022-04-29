import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon, AirportShuttleTwoTone } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";
import api from '../api/axios';
import AuthContext from '../context/AuthContext'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  let {authTokens, logoutUser} = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const [posts,setPosts] = useState([]);
  const [search,setSearch] = useState('');
  const [searchResults,setsearchResults] = useState([]);

  const [postTitle,setPostTitle] = useState('');
  const [text,setText] = useState('');

  const [editTitle,setEditTitle] = useState('');
  const [editText,setEditText] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('article-list/', {headers: {
          'Authorization': 'Bearer ' + authTokens.access}
        });
        console.log(response.data);
        setPosts(response.data);
      } catch(err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
        }
        }
      }

      fetchPosts();
  }, [])


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const author = posts.length ? posts[posts.length-1].author+1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {author, postTitle, dateTime, text};
    try {
      const response = await api.post('article-create/', newPost, {headers: {
        'Authorization': 'Bearer ' + authTokens.access}
      });
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setText('');
      navigate('/');
    } catch(err) {
      console.log(err.message);
    }
  }

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {author, title: editTitle, dateTime, text: editText}; 
    try {
      const response = await api.put('article-update/<str:pk>/');
      setPosts(posts.map(post => post.id === id ? {...response.data} : post));
      setEditTitle('');
      setEditText('');
      history.push('/');
    } catch (error) {
      console.log(err.message);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete('article-delete/<str:pk>/')
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch(err) {
      console.log(err.message);
    }
  }


  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="عنوان"
                size="small"
                onChange={event => {setPostTitle(event.target.value)}}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                onChange={event => {setText(event.target.value)}}
                multiline
                rows={4}
                defaultValue="اروي قصتك..."
                variant="outlined"
                label="وصف"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="الرؤية" value="Public">
                <MenuItem value="Public">عام</MenuItem>
                <MenuItem value="Private">خاص</MenuItem>
                <MenuItem value="Unlisted">غير مدرج</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">من يمكنه التعليق؟</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="الجميع"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="جيراني"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="لا أحد"
                />
                <FormControlLabel
                  value="Custom"
                  control={<Radio size="small" />}
                  label="مخصص "
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={(e) => {handleSubmit(e); setOpenAlert(true);}}
              >
                ضيف
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                يلغي
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleSubmit} severity="success">
        تمت إضافة الرسالة بنجاح
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
