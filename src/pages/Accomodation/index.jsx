import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Error from '../../components/Error'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import Host from '../../components/Host'
import Carrousel from '../../components/Carrousel'
import Accomodations from '../../datas/accomodations.json'
import Stars from '../../components/Stars'


export default function Accomodation() {
  // on récupère l'id dans l'URL
  const { id } = useParams()
  
  // on récupère le logement associé à l'id de l'URL
  const accomodation = Accomodations.find(
    (accomodation) => accomodation.id === id
  )

  if (!accomodation) {
    return <Error />
  }

  const { title, location, host, rating, equipments, description, pictures } =
    accomodation

  return (
    <>
      <Header />
      <section className="accomodation_page">
        <Carrousel images={pictures} />
        <div className="accomodation_container">
          <div className="accomodation_datas">
            <h2 className="accomodation_title">{title}</h2>
            <p className="accomodation_location">{location}</p>
            <div className="accomodation_tags">
              {accomodation.tags.map((tag, tagIndex) => {
                return <button key={tagIndex}>{tag}</button>
              })}
            </div>
          </div>
          <div className="host_desc">
            <Host host={host} />
  
          <div className="rating_host">
        <Stars rating={rating} />
        </div>
      </div>
        </div>
        <div className="accomodation_collapse">
          <span className="collapse_desc">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>
          </span>
          <span className="collapse_equip">
          <Collapse  title="Équipements" content={equipments} >
            {equipments.map(equipment => <p key={equipment}>{equipment}</p>)}
          </Collapse>
          </span>
        </div>
      </section>
      <Footer />
    </>
    
  )
}
