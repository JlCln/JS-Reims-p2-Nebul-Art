import { useEffect, useState } from "react";
import CarouselItem from "../components/CarouselItem";
import "./Browse.css";

const Browse = () => {
  interface Museum {
    img: string;
    title: string;
    description: string;
    link: string;
    id: string;
    coordinates: {
      lat: number;
      lon: number;
    };
  }

  interface ArtGalleryItem {
    img: string;
    title: string;
    description: string;
    link: string;
    id: string;
  }

  const [museums, setMuseums] = useState<Museum[]>([]);
  const [artGallery, setArtGallery] = useState<ArtGalleryItem[]>([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number | null;
    lon: number | null;
  }>({ lat: null, lon: null });
  const [carouselType, setCarouselType] = useState("museums");

  useEffect(() => {
    fetch(
      "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/musees-de-france-base-museofile/records?limit=100&refine=region%3A%22Grand%20Est%22",
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.results.map(
          (record: {
            nom_officiel: string;
            adresse: string;
            ville: string;
            url: string;
            identifiant: string;
            coordonnees: {
              lat: number;
              lon: number;
            };
          }) => ({
            img: "./src/assets/images/musee-paris.jpg",
            title: record.nom_officiel,
            description: `${record.adresse}, ${record.ville}`,
            link: record.url,
            id: record.identifiant,
            coordinates: record.coordonnees,
          }),
        );
        setMuseums(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(
      "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/base-joconde-extrait/records?limit=50&refine=ville%3A%22Reims%22",
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.results.map(
          (record: {
            titre: string;
            domaine: string;
            location: string;
            recordid: string;
          }) => ({
            img: "./src/assets/images/musee-paris.jpg",
            title: record.titre,
            description: `${record.domaine}, ${record.location}`,
            link: "",
            id: record.recordid,
          }),
        );
        setArtGallery(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        },
      );
    }
  }, []);

  const handleShowMuseums = () => {
    const museumsWithDistance = museums.map((museum) => {
      const distance = calculateDistance(
        userLocation.lat ?? 0,
        userLocation.lon ?? 0,
        museum.coordinates.lat,
        museum.coordinates.lon,
      );
      return { ...museum, distance };
    });

    const filteredMuseums = museumsWithDistance.filter(
      (museum) => museum.distance <= 100,
    );

    const sortedMuseums = filteredMuseums.sort(
      (a, b) => a.distance - b.distance,
    );

    const limitedMuseums = sortedMuseums.slice(0, 50);

    setMuseums(limitedMuseums);
    setCarouselType("museums");
    setShowCarousel(true);
  };

  const handleShowArtGallery = () => {
    setCarouselType("artGallery");
    setShowCarousel(true);
  };

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <div>
      <button
        type="button"
        className="browse-museums-button"
        onClick={handleShowMuseums}
      >
        Local Museums
      </button>
      <button
        type="button"
        className="browse-museums-button"
        onClick={handleShowArtGallery}
      >
        Art Gallery
      </button>
      {showCarousel && carouselType === "museums" && (
        <CarouselItem
          articles={museums}
          userLocation={{
            lat: userLocation.lat ?? 0,
            lon: userLocation.lon ?? 0,
          }}
        />
      )}
      {showCarousel && carouselType === "artGallery" && (
        <CarouselItem
          articles={artGallery}
          userLocation={{
            lat: userLocation.lat ?? 0,
            lon: userLocation.lon ?? 0,
          }}
        />
      )}
    </div>
  );
};

export default Browse;
