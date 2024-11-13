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

function Paintings({ titre, imageoeuvre, auteur }: SearchProps) {
  return (
    <>
      <div className="painting-container">
        <img className="painting-img" src={imageoeuvre} alt="background" />
        <div className="text-container">
          <h3 className="painting-title">{titre}</h3>
          <p className="auteur">{auteur}</p>
        </div>
      </div>
    </>
  );
}

export default Paintings;
