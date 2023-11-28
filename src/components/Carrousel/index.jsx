import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} />
const chevronRight = <FontAwesomeIcon icon={faChevronRight} />

function Carrousel({ images }) {
  const length = images.length
  // Index de la première image
  const [current, setCurrent] = useState(0)

  // Si on est à la dernière image (current === length - 1) on revient à la première (0)
  // Ou bien c'est la suivante (current + 1)
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  // Si on est à la première image (current === 0) on revient à la dernière (length - 1)
  // Ou bien on retourne à la précèdente (current - 1)
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="scroll">
      <div className="scroll_veil"> </div>
      <img
        src={images[current]}
        alt="Logement en location"
        className="scroll_picture"
      />
     
      {length > 1 ? (
        <div className="scroller">
          <i alt="previous" onClick={prevImage} className="chevron">
            {chevronLeft}
          </i>
          <i alt="next" onClick={nextImage} className="chevron">
            {' '}
            {chevronRight}
          </i>
          <span className="scroll_number">
            <p>
            {current + 1} / {length}</p>
          </span>
        </div>
      ) : null}
    </div>
  )
}

export default Carrousel
