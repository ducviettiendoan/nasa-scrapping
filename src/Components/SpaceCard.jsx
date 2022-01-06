import "../style/card.css";
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function SpaceCard(props) {
  // const onLikeClick = () => {
  //   setLike(prev => !prev);
  // }

  return (
    <Card className="card">
      <div style={{ flexGrow: 1 }}>
        <img src={props.url} alt="APOD" width="100%" height="100%" />
      </div>
      <section className="cardContent">
        <div className="copyright">{props.copyright}</div>
        <div className="subtitle">
          <span className="title">{props.title}</span>
          <span className="hyphen">-</span>
          <span className="date">{props.date}</span>
        </div>
        <div>{props.explanation}</div>
      </section>
      <Button className="like" onClick={() => { props.handleClickLike(props.id) }}>
        {!props.likePics[props.id] ? <FavoriteBorderIcon /> : <FavoriteIcon sx={{ color: "red" }} />}
        <span className="likeLabel">Like</span>
      </Button>


    </Card>

  );
}

export default SpaceCard;
