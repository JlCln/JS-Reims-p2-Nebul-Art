import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Article from "./Article";

function CarouselItem() {
  const articles = [
    {
      img: "src/assets/images/musee-paris.jpg",
      title: "Louvre",
      description: "Lorem Ipsun Julie",
      link: "",
      id: 1,
    },

    {
      img: "src/assets/images/musee-paris.jpg",
      title: "Dum Dum",
      description: "Lorem Ipsun Julie",
      link: "",
      id: 2,
    },
    {
      img: "src/assets/images/musee-paris.jpg",
      title: "Toto",
      description: "Lorem Ipsun Julie",
      link: "",
      id: 3,
    },
  ];

  return (
    <>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        axis="vertical"
        centerMode={true}
        emulateTouch={true}
        infiniteLoop={true}
      >
        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              img={article.img}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselItem;
