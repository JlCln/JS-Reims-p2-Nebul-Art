import { useEffect, useState } from "react";
import CarouselItem from "../components/CarouselItem";
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
  const [showCarousel, setShowCarousel] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number | null;
    lon: number | null;
  }>({ lat: null, lon: null });

  useEffect(() => {
    fetch("http://localhost:3001/api/items")
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
    setShowCarousel(true);
  };

  return (
    <div>
      <button
        type="button"
        className="browse-museums-button"
        onClick={handleShowItems}
      >
        Local Museums
      </button>
      {showCarousel && (
        <CarouselItem
          articles={items}
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
