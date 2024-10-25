import { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";
import "./Browse.css";

const Browse = () => {
  const [museums, setMuseums] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

  interface MuseumRecord {
    nom_officiel: string;
    adresse: string;
    ville: string;
    url: string;
    identifiant: string;
  }

  useEffect(() => {
    fetch(
      "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/musees-de-france-base-museofile/records?limit=20",
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.results.map((record: MuseumRecord) => ({
          img: "src/assets/images/musee-paris.jpg", // Placeholder image
          title: record.nom_officiel,
          description: `${record.adresse}, ${record.ville}`,
          link: record.url,
          id: record.identifiant,
        }));
        setMuseums(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleShowCarousel = () => {
    setShowCarousel(true);
  };

  return (
    <div>
      <button
        type="button"
        className="browse-museums-button"
        onClick={handleShowCarousel}
      >
        Local Museums
      </button>
      <button
        type="button"
        className="browse-museums-button"
        onClick={handleShowCarousel}
      >
        Art Gallery
      </button>
      {showCarousel && <CarouselItem articles={museums} />}
    </div>
  );
};

export default Browse;
