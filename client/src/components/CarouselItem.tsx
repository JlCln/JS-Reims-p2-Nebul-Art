import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselItem.css";
import Article from "./Article";

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

function CarouselItem({ articles, userLocation }: CarouselItemProps) {
  if (!articles || articles.length === 0) {
    return <p>No articles available</p>;
  }

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
        {articles.map((article) => (
          <div key={article.id} className="carousel-slide">
            <Article
              img={article.img}
              title={article.title}
              description={article.description}
              url={article.url}
              coordinates={article.coordinates}
              userLocation={userLocation}
              distance={article.distance}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselItem;
