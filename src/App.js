import './style/App.css';
import React, { useState } from 'react';
import SpaceCard from './Components/SpaceCard';
import { connect } from "react-redux";
import { getApod } from "./actions/actions";
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function App(props) {
  const [likePics, setLikePics] = useState({});
  React.useEffect(() => {
    props.getApod();
    console.log(props.pictures);
    if (props.pictures) {
      props.pictures.map((picture, i) => {
        return likePics[i] = false;
      })
    }
    setLikePics({ ...likePics });
  }, []);

  // React.useEffect(() => {
  //   const likeStatus = window.localStorage.getItem("likeStatus");
  //   setLikePics(JSON.parse(likeStatus));
  // }, []);

  // React.useEffect(() => {
  //   window.localStorage.setItem("likeStatus", JSON.stringify(likePics));
  // })

  const handleClickLike = (key) => {
    likePics[key] = !likePics[key];
    setLikePics({ ...likePics });
  }
  return (
    <div>
      {props.pictures ? <div className="App">
        <Grid container>
          {props.pictures.map((picture, i) => {
            return (
              <Grid item xs={4} style={{ padding: "0px 16px" }}>
                <SpaceCard
                  copyright={picture.copyright}
                  date={picture.date}
                  explanation={picture.explanation}
                  title={picture.title}
                  url={picture.url}
                  id={i}
                  handleClickLike={handleClickLike}
                  likePics={likePics} />
              </Grid>
            )
          })}
        </Grid>
      </div>
        :
        <CircularProgress style={{ position: 'absolute', top: "50%", right: "50%" }} />
      }
    </div>
  );
}

const mapStateToProps = ({ pictures }) => {
  return {
    pictures: pictures.pictures,
    reload: pictures.reload,
  };
};

const mapDispatchToProps = {
  getApod,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

