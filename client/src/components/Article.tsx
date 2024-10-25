import "./Article.css";

interface ArticleProps {
  img: string;
  description: string;
  title: string;
  link: string;
}

function Article({ img, description, title, link }: ArticleProps) {
  return (
    <div className="container">
      <img className="museum" src={img} alt="musee" />
      <div className="Title">
        <h1>{title}</h1>
        <p>{description}</p>
        <a
          className="details"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default Article;
