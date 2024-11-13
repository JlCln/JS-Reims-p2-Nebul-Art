import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import Paintings from "../components/Paintings";
import "./Search.css";
import { Link } from "react-router-dom";

interface Canva {
  reference: string;
  auteur: string;
  commentaires: string;
  description: string;
  domaine: string[];
  localisation: string;
  titre: string;
  imageoeuvre: string;
  lien_site_associe: string;
  lieu_de_creation_utilisation: string;
}

const Search = () => {
  const [apiCanvas, setApiCanvas] = useState<Canva[]>([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchCanvas = async () => {
      try {
        const url = `/api/gallery${
          searchItem ? `?titre=${encodeURIComponent(searchItem)}` : ""
        }`;

        const response = await fetch(url);
        const data = await response.json();
        setApiCanvas(data);
      } catch (err) {
        console.error("Erreur de chargement des données :", err);
      }
    };

    fetchCanvas();
  }, [searchItem]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-filter">
        <h2>Find a Painting</h2>
        <input
          className="search-input-container"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Search for Painting"
        />
        {apiCanvas.length > 0 && (
          <div className="search-results">
            {apiCanvas.map((canva) => (
              <button
                onClick={() => window.location.href === canva.lien_site_associe}
                className="filter-btn"
                type="button"
                key={canva.titre}
              >
                <Link to={canva.titre} />
                {canva.lieu_de_creation_utilisation}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="paintings-container">
        {apiCanvas.map((canva) => (
          <button
            className="paintings-container-btn"
            type="button"
            key={canva.reference}
            onClick={() => window.location.href === canva.lien_site_associe} // Navigate when clicked
          >
            <Paintings
              titre={canva.titre}
              imageoeuvre={canva.imageoeuvre}
              auteur={canva.auteur}
              description={canva.description}
              lien_site_associe={canva.lien_site_associe}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
