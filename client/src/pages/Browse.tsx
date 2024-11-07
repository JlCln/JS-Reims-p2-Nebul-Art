import { useEffect, useState } from "react";
import CarouselItem from "../components/CarouselItem";
import GalleryCarouselItem from "../components/GalleryCarouselItem";
import "./Browse.css";

const Browse = () => {
  interface Item {
    id: string;
    title: string;
    url: string;
    adresse: string;
    ville: string;
    description: string;
    coordinates: {
      lat: number;
      lon: number;
    };
    img: string;
  }

  const [items, setItems] = useState<Item[]>([]);
  interface ArtGalleryItem {
    id: string;
    titre: string;
    localisation: string;
    lien_site_associe: string;
    imageoeuvre: string;
  }

  const [artGalleryItems, setArtGalleryItems] = useState<ArtGalleryItem[]>([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselType, setCarouselType] = useState("museums");
  const [userLocation, setUserLocation] = useState<{
    lat: number | null;
    lon: number | null;
  }>({ lat: null, lon: null });

  useEffect(() => {
    fetch(
      "https://museum-api-test-i6ck9ll6u-jlclns-projects.vercel.app/api/museums",
    )
      .then((response) => response.json())
      .then((data) => {
        interface RecordType {
          id: string;
          nom_officiel: string;
          url: string;
          adresse: string;
          ville: string;
          description: string;
          coordonnees: {
            lat: number;
            lon: number;
          };
          picture: string;
        }

        const formattedData = data.map((record: RecordType) => ({
          id: record.id,
          title: record.nom_officiel,
          url: record.url,
          description: `${record.adresse}, ${record.ville}`,
          coordinates: record.coordonnees,
          img: record.picture,
        }));
        setItems(formattedData);
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

  const shuffleArray = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleShowArtGallery = async () => {
    const response = await fetch(
      "https://gallery-api-test-6z2ph3s4o-jlclns-projects.vercel.app/api/gallery",
    );
    const data = await response.json();
    const formattedData: ArtGalleryItem[] = data.map(
      (record: ArtGalleryItem) => ({
        id: record.id,
        titre: record.titre,
        localisation: record.localisation,
        lien_site_associe: record.lien_site_associe,
        imageoeuvre: record.imageoeuvre,
      }),
    );
    const shuffledData = shuffleArray(formattedData);
    setArtGalleryItems(shuffledData);
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

  const handleShowItems = () => {
    const itemsWithDistance = items.map((item) => {
      const distance = calculateDistance(
        userLocation.lat ?? 0,
        userLocation.lon ?? 0,
        item.coordinates.lat,
        item.coordinates.lon,
      );
      return { ...item, distance };
    });

    const filteredItems = itemsWithDistance.filter(
      (item) => item.distance <= 100,
    );

    const sortedItems = filteredItems.sort((a, b) => a.distance - b.distance);

    const limitedItems = sortedItems.slice(0, 50);

    setItems(limitedItems);
    setCarouselType("museums");
    setShowCarousel(true);
  };

  return (
    <div className="browse-container">
      <button
        type="button"
        className="browse-museums-button"
        onClick={handleShowItems}
      >
        Local Museums
      </button>
      <button
        type="button"
        className="browse-gallery-button"
        onClick={handleShowArtGallery}
      >
        Art Gallery
      </button>
      {showCarousel && carouselType === "museums" && (
        <CarouselItem
          articles={items}
          userLocation={{
            lat: userLocation.lat ?? 0,
            lon: userLocation.lon ?? 0,
          }}
        />
      )}
      {showCarousel && carouselType === "artGallery" && (
        <GalleryCarouselItem
          articles={artGalleryItems}
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
