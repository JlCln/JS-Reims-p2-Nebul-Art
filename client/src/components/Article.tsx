import "./components-css/Article.css";

/*interface IconsList {
	name: string;
	imgSrc: string;
}*/

function Homepage() {
  return (
    <>
      <div className="container">
        {/* <img className="museum" src="/images/musee-paris.jpg" alt="musee" /> */}
        <div className="Title">
          <h1>Louvre Museum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit perspiciatis at harum explicabo, dicta maiores quod
            odit adipisci veniam sed architecto impedit vero assumenda,
            molestias aliquid hic dolores delectus! Ut? Quasi nobis minus
            reprehenderit cupiditate commodi accusamus obcaecati impedit
            necessitatibus saepe consequuntur autem illum qui voluptatibus porro
            quod cumque dolores, nihil beatae maiores odio nulla omnis ipsa
            minima! Similique, eum? Recusandae tempore dicta et dolore iusto,
            iste cupiditate modi esse voluptate! Inventore porro libero
          </p>
          <a
            className="details"
            href="https://www.google.com/imgres?q=images%20of%20museums&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fver.h-cdn.co%2Fassets%2F15%2F38%2F1024x512%2Flandscape-1442432299-worlds-best-museums-05.jpg%3Fresize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.veranda.com%2Ftravel%2Fg1436%2Fbest-museums-in-the-world%2F&docid=e4P-urbkqTib5M&tbnid=6Srsp04ZOotwHM&vet=12ahUKEwis7NjTyqGJAxX3TaQEHVWyKjAQM3oECHIQAA..i&w=1024&h=512&hcb=2&ved=2ahUKEwis7NjTyqGJAxX3TaQEHVWyKjAQM3oECHIQAA"
          >
            view details
          </a>
        </div>
      </div>
    </>
  );
}

export default Homepage;
