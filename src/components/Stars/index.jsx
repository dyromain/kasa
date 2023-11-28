import greyStar from '../../assets/greystar.png'
import redStar from '../../assets/redstar.png'

export default function Stars(props) {
  const rating = props.rating
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="rating_container">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating_star"
            src={redStar}
            alt="Etoile rouge"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating_star"
            src={greyStar}
            alt="Etoile grise"
          />
        )
      )}
    </div>
  )
}

