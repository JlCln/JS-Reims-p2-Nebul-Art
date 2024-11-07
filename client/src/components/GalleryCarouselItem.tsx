import type React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselItem.css";
import "./GalleryCarouselItem.css";

interface ArticleData {
  id: string;
  titre: string;
  localisation: string;
  lien_site_associe: string;
  imageoeuvre: string;
  domaine: string;
}

interface GalleryCarouselItemProps {
  articles: ArticleData[];
  userLocation: { lat: number; lon: number };
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
      className="custom-arrow custom-arrow-next-galleryonly"
    >
      &#9654;
    </button>
  );

const GalleryCarouselItem: React.FC<GalleryCarouselItemProps> = ({
  articles,
}) => {
  return (
    <div className="gallery-carousel-container">
      <Carousel
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showIndicators={false}
        axis="vertical"
        centerMode={true}
        autoFocus={true}
        centerSlidePercentage={100}
        width={"100%"}
        showThumbs={false}
        showStatus={false}
      >
        {articles.map((article) => (
          <div
            key={article.id}
            className="gallery-slide"
            style={{ backgroundImage: `url(${article.imageoeuvre})` }}
          >
            <div className="gallery-text">
              <h2 className="gallery-text-title">
                {article.titre
                  ? article.titre.charAt(0).toUpperCase() +
                    article.titre.slice(1)
                  : "Untitled"}
              </h2>
              <p className="gallery-localisation">
                🏫{" "}
                {article.localisation
                  .replace("Reims ; ", "")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </p>
              <p className="gallery-text-url">
                <a
                  className="gallery-url-details"
                  href={article.lien_site_associe}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="gallery-url-icon">ℹ️</span> More details here
                </a>
              </p>
              <p className="gallery-object-type">
                {article.domaine.includes("textile") && "🧶"}
                {!article.domaine.includes("textile") &&
                  article.domaine.includes("céramique") &&
                  "🏺"}
                {!article.domaine.includes("textile") &&
                  !article.domaine.includes("céramique") &&
                  (article.domaine.includes("sculpture") ||
                    article.domaine.includes("archéologie")) &&
                  "🗿"}
                {!article.domaine.includes("textile") &&
                  !article.domaine.includes("céramique") &&
                  !article.domaine.includes("sculpture") &&
                  !article.domaine.includes("archéologie") &&
                  article.domaine.includes("métallurgie") &&
                  "🪙"}
                {!article.domaine.includes("textile") &&
                  !article.domaine.includes("céramique") &&
                  !article.domaine.includes("sculpture") &&
                  !article.domaine.includes("archéologie") &&
                  !article.domaine.includes("métallurgie") &&
                  article.domaine.includes("peinture") &&
                  "🎨"}
                {!article.domaine.includes("textile") &&
                  !article.domaine.includes("céramique") &&
                  !article.domaine.includes("sculpture") &&
                  !article.domaine.includes("archéologie") &&
                  !article.domaine.includes("métallurgie") &&
                  !article.domaine.includes("peinture") &&
                  article.domaine.includes("estampe") &&
                  "📜"}
                {!article.domaine.includes("textile") &&
                  !article.domaine.includes("céramique") &&
                  !article.domaine.includes("sculpture") &&
                  !article.domaine.includes("archéologie") &&
                  !article.domaine.includes("métallurgie") &&
                  !article.domaine.includes("peinture") &&
                  !article.domaine.includes("estampe") &&
                  article.domaine.includes("Asie orientale") &&
                  "🌏"}
                {!article.domaine.includes("textile") &&
                  !article.domaine.includes("céramique") &&
                  !article.domaine.includes("sculpture") &&
                  !article.domaine.includes("archéologie") &&
                  !article.domaine.includes("métallurgie") &&
                  !article.domaine.includes("peinture") &&
                  !article.domaine.includes("estampe") &&
                  !article.domaine.includes("Asie orientale") &&
                  "❔"}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryCarouselItem;
