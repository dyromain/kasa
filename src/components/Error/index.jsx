import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error">
      <div className="error_msg">
        <h1 className="error_title">404</h1>
        <p className="error_txt">La page que vous recherchez n'existe pas.</p>
      </div>
      <Link className="hp_return" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error;