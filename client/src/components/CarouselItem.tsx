import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselItem.css";
import Article from "./Article";
import Compass from "./Compass";

interface ArticleData {
  id: string;
  img: string;
  title: string;
  description: string;
  url: string;
  coordinates?: { lat: number; lon: number };
  distance?: number;
}

interface CarouselItemProps {
  articles: ArticleData[];
  userLocation: { lat: number; lon: number };
}

const CarouselItem = ({ articles, userLocation }: CarouselItemProps) => {
  if (!articles || articles.length === 0) {
    return <p>No articles available</p>;
  }

  const toRadians = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };

  const toDegrees = (radians: number) => {
    return radians * (180 / Math.PI);
  };

  const calculateDirection = (
    userLocation: { lat: number; lon: number },
    articleCoordinates: { lat: number; lon: number },
  ) => {
    const lat1 = toRadians(userLocation.lat);
    const lon1 = toRadians(userLocation.lon);
    const lat2 = toRadians(articleCoordinates.lat);
    const lon2 = toRadians(articleCoordinates.lon);

    const dLon = lon2 - lon1;

    const y = Math.sin(dLon) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    let angle = toDegrees(Math.atan2(y, x));
    angle = (angle + 360) % 360;

    return angle;
  };

  const renderArrowPrev = (
    onClickHandler: () => void,
    hasPrev: boolean,
    label: string,
  ) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-prev"
      >
        &#9664;
      </button>
    );

  const renderArrowNext = (
    onClickHandler: () => void,
    hasNext: boolean,
    label: string,
  ) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-next"
      >
        &#9654;
      </button>
    );

  return (
    <div className="carousel-container">
      <Carousel
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showIndicators={false}
        axis="vertical"
        centerMode={true}
        autoFocus={true}
        centerSlidePercentage={100}
        width={"100%"}
        dynamicHeight={true}
        showThumbs={false}
        showStatus={false}
      >
        {articles.map((article, index) => (
          <div key={article.id || index} className="carousel-slide">
            <Article
              img={article.img}
              title={article.title}
              description={article.description}
              url={article.url}
              coordinates={article.coordinates}
              userLocation={userLocation}
              distance={article.distance}
            />
            <div className="compass-container">
              <Compass
                direction={calculateDirection(
                  userLocation,
                  article.coordinates ?? { lat: 0, lon: 0 },
                )}
              />
              <span>{article.distance} km</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
