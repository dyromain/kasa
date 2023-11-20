import { Link } from 'react-router-dom'

export default function Card({ id, title, cover }) {
  return (
   
      <div className="card">
        <h2>{title}</h2>
        <Link to={`/accomodation/${id}`}>
          <img src={cover} alt={title} className="card_img"/>
        </Link>
      </div>
  )
}
