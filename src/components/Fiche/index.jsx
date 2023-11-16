import PropTypes from 'prop-types'

function Fiche({ id, title, cover, pictures, description, host, rating, location, equipments, tags}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{id}</span>
            <img src={cover} alt="logement" height={80} width={80} />
            <span>{title}</span>
            <span>{pictures}</span>
            <span>{description}</span>
            <span>{host}</span>
            <span>{rating}</span>
            <span>{location}</span>
            <span>{equipments}</span>
            <span>{tags}</span>
        </div>
    )
}

Fiche.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    pictures: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }
  
  Fiche.defaultProps = {
    id: '',
    title: '',
    cover: '',
    pictures: '',
    description: '',
    host: '',
    rating: '',
    location: '',
    equipments: '',
    tags: '',
  }
 
export default Fiche