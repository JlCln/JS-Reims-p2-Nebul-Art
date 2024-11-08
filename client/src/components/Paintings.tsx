import "./Paintings.css";

interface SearchProps {
  reference?: string;
  auteur: string;
  commentaires?: string;
  description: string;
  domaine?: string[];
  localisation?: string;
  titre: string;
  imageoeuvre: string;
  lien_site_associe: string;
}

function Paintings({ titre, imageoeuvre, description, auteur }: SearchProps) {
  return (
    <>
      <div className="painting-container">
        <img className="painting-img" src={imageoeuvre} alt="background" />
        <h3>{titre}</h3>
        <p className="auteur">{auteur}</p>
        <div className="text-container">
          <input type="checkbox" id="toggle" className="toggle-checkbox" />
          <label htmlFor="toggle" className="read-more">
            Read more
          </label>
          <p className="painting-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Paintings;
