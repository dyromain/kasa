import { Link } from 'react-router-dom'

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/accomodation/${id}`} className="card">
      <img src={cover} alt={title} className="card_img" />
      <h2>{title}</h2>
    </Link>
  )
}
