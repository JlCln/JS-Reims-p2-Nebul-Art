import "./Article.css";

interface ArticleProps {
  img: string;
  description: string;
  title: string;
  link: string;
  coordinates?: { lat: number; lon: number };
  userLocation?: { lat: number; lon: number };
  distance?: number;
}

function Article({ img, description, title, link, distance }: ArticleProps) {
  return (
    <div className="article-content" style={{ backgroundImage: `url(${img})` }}>
      <div className="article-text">
        <h1 className="article-title">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>
        <p className="article-description">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
        {distance !== undefined && <p>Distance: {distance.toFixed(1)} km</p>}
        {link && (
          <a className="details" href={link} target="_blank" rel="noreferrer">
            View more details
          </a>
        )}
      </div>
    </div>
  );
}

export default Article;
