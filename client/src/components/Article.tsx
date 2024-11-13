import "./Article.css";
import Compass from "./Compass";

interface ArticleProps {
  img: string;
  description: string;
  title: string;
  url: string;
  coordinates?: { lat: number; lon: number };
  userLocation?: { lat: number; lon: number };
  distance?: number;
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

function Article({
  img,
  description,
  title,
  url,
  coordinates,
  userLocation,
  distance,
}: ArticleProps) {
  return (
    <div className="article-content" style={{ backgroundImage: `url(${img})` }}>
      <div className="article-text">
        <h1 className="article-title">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>
        <p className="article-description">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
        {distance !== undefined && (
          <div className="distance-compass-container">
            <Compass
              direction={calculateDirection(
                userLocation ?? { lat: 0, lon: 0 },
                coordinates ?? { lat: 0, lon: 0 },
              )}
            />
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
          </div>
        )}
        {url && (
          <a
            className="details"
            href={`https://${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Site Web
          </a>
        )}
      </div>
    </div>
  );
}

export default Article;
