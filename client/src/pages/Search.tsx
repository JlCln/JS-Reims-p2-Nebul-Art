import { useEffect, useState } from "react";
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
  const [filteredCanvas, setFilteredCanvas] = useState<Canva[]>([]);

  useEffect(() => {
    fetch(
      "https://gallery-api-test-6z2ph3s4o-jlclns-projects.vercel.app/api/gallery",
    )
      .then((response) => response.json())
      .then((data) => {
        setApiCanvas(data);
        setFilteredCanvas(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredPaintings = apiCanvas.filter((canva) =>
      canva.titre.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredCanvas(filteredPaintings);
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
        <ol>
          {filteredCanvas.map((canva) => (
            <li key={canva.reference}>
              {canva.titre}
              {canva.reference}
              {canva.titre}
            </li>
          ))}
        </ol>
      </div>
      <div className="paintings-container">
        {filteredCanvas.map((canva) => (
          <Paintings
            key={canva.reference}
            titre={canva.titre}
            imageoeuvre={canva.imageoeuvre}
            auteur={canva.auteur}
            description={canva.description}
            lien_site_associe={canva.lien_site_associe}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
