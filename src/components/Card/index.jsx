import { Link } from 'react-router-dom'

export default function Card({ id, title, cover }) {
  return (
   
    <Link to={`/accomodation/${id}`} className="card">
     
        <div className='veil'></div>
        <h2>{title}</h2>
        
          <img src={cover} alt={title} className="card_img"/>
        
        

      </Link>
  )
}
