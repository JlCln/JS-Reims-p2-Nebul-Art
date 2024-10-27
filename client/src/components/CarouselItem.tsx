import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselItem.css";
import Article from "./Article";

interface ArticleData {
  id: string;
  img: string;
  title: string;
  description: string;
  link: string;
}

interface CarouselItemProps {
  articles: ArticleData[];
}

function CarouselItem({ articles }: CarouselItemProps) {
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
          <Article
            key={article.id}
            img={article.img}
            title={article.title}
            description={article.description}
            link={article.link}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselItem;
