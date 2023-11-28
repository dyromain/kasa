
//const Host = ({firstName, lastName, picture }) => {
  
export default function Host({ host }) {
  const nameSplit = host.name.split(" ");
  const [firstname, lastname] = nameSplit;

return (
    <div className="accomodation_host">
      <div className="info_host">
        <div className="name_host">
          <p>{firstname.trim()}</p>
          <p>{lastname.trim()}</p>
        </div>
        <img src={host.picture} alt="Hote" className="image_host"/>
      </div>
 
    </div>
  );
};