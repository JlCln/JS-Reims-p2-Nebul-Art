import "./Article.css";

interface ArticleProps {
  img: string;
  description: string;
  title: string;
  url: string;
  coordinates?: { lat: number; lon: number };
  userLocation?: { lat: number; lon: number };
  distance?: number;
}

function Article({ img, description, title, url, distance }: ArticleProps) {
  return (
    <div className="article-content" style={{ backgroundImage: `url(${img})` }}>
      <div className="article-text">
        <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
        <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
        {distance !== undefined && (
          <p
            className="distance-text"
            style={{
              color:
                distance < 30
                  ? "#99f2a5"
                  : distance < 60
                    ? "#eda77b"
                    : "#db6060",
            }}
          >
            Distance: {distance.toFixed(1)} km
          </p>
        )}
        {url && (
          <a className="details" href={url} target="_blank" rel="noreferrer">
            Site Web
          </a>
        )}
      </div>
    </div>
  );
}

export default Article;
