import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />
const angleUp = <FontAwesomeIcon icon={faAngleUp} />

export default function Collapse ({ title, children }) {
  //On utilise le hook useState() pour déclarer le state
  const [toggleOpen, setToggle] = useState(false); // le state du toggle est défini "false" par défaut

  const open = () => {
    setToggle(!toggleOpen);
  };

  return (
    // Fermé par défaut et ouvert au clic
    <div className="collapse">
      <div className="collapse_title">
        <h3>{title}</h3>
        <p onClick={open}>
          {toggleOpen ? (
            <i className="collapse_icon">{angleUp}</i>
          ) : (
            <i className="collapse_icon">{angleDown}</i>
          )}
        </p>
      </div>
      {/* La description s'affiche si "true"*/}
      <div className="collapse_true">
        {toggleOpen ? children : null}
      </div>
    </div>
  );
};
