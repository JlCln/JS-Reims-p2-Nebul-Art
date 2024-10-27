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
        <h1>{title}</h1>
        <p>{description}</p>
        {distance !== undefined && <p>Distance: {distance.toFixed(2)} km</p>}
        {link && (
          <a
            className="details"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View details
          </a>
        )}
      </div>
    </div>
  );
}

export default Article;
