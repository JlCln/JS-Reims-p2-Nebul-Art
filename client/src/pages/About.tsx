import { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import "./About.css";
import avatarBergeline from "../assets/images/Bergeline_avatar.png";
import avatarJulie from "../assets/images/julie_avatar2.svg";
import avatarMalachai from "../assets/images/mafia.png";
import avatarMichel from "../assets/images/michel_avatar.svg";
function About() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const abouts = [
    {
      img: avatarJulie,
      name: "Julie",
      title: "Team member",
      icon1: "/src/assets/images/linkedin-box-fill.png",
      icon2: "/src/assets/images/github-fill.png",
      icon3: "/src/assets/images/school-fill.png",
      id: 1,
    },
    {
      img: avatarMichel,
      name: "Michel",
      title: "Team member",
      icon1: "/src/assets/images/linkedin-box-fill.png",
      icon2: "/src/assets/images/github-fill.png",
      icon3: "/src/assets/images/school-fill.png",
      id: 2,
    },
    {
      img: avatarBergeline,
      name: "Bergeline",
      title: "Team member",
      icon1: "/src/assets/images/linkedin-box-fill.png",
      icon2: "/src/assets/images/github-fill.png",
      icon3: "/src/assets/images/school-fill.png",
      id: 3,
    },
    {
      img: avatarMalachai,
      name: "Malachai",
      title: "Team member",
      icon1: "/src/assets/images/linkedin-box-fill.png",
      icon2: "/src/assets/images/github-fill.png",
      icon3: "/src/assets/images/school-fill.png",
      id: 4,
    },
  ];

  const displayAvatar = (id: number) => {
    setSelectedId(id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectedId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="paragraph-container">
          <h2 className="about-title">About us</h2>
          <p className="about">
            Bienvenue à la Wild Code School, une école de codage innovante qui
            vise à combler le fossé entre l'éducation et l'industrie
            technologique. Fondée sur la conviction que tout le monde peut
            devenir un développeur compétent avec le soutien et les ressources
            nécessaires, la Wild Code School propose une formation pratique et
            immersive dans divers langages et technologies de programmation. En
            mettant l'accent sur l'apprentissage par projet et les applications
            du monde réel, nous avons pu créer ce projet important pour faire le
            portrait de nos capacités en tant que codeurs passionnés. Nous nous
            épanouissons en résolvant des problèmes complexes et en transformant
            nos idées en applications réactives.
          </p>
        </div>

        <div className="card-container" ref={containerRef}>
          {abouts.map((about) => (
            <div className="card-avatar" key={about.id}>
              {selectedId === about.id ? (
                <Avatar
                  name={about.name}
                  img={about.img}
                  title={about.title}
                  icon1={about.icon1}
                  icon2={about.icon2}
                  icon3={about.icon3}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => displayAvatar(about.id)}
                  className="avatar-btn"
                >
                  <img
                    src={about.img}
                    alt="avatar"
                    className="avatar-btn-img"
                  />
                  <p className="avatar-name">{about.name}</p>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
