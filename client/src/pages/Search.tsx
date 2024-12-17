import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import Paintings from "../components/Paintings";
import "./Search.css";

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
        <label htmlFor="search">Find a Painting</label>
        <input
          id="search"
          className="search-input-container"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Search for Painting"
        />
      </div>
      <div className="paintings-container">
        {apiCanvas.map((canva) => (
          <button
            className="paintings-container-btn"
            type="button"
            key={canva.reference}
            onClick={() => {
              window.location.href = canva.lien_site_associe;
            }}
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
