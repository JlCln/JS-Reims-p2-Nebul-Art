import { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";

function About() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const abouts = [
    {
      img: "/src/assets/images/julie_avatar2.svg",
      name: "Julie",
      title: "Team member",
      icon1: "/src/assets/images/linkedin-box-fill.png",
      icon2: "/src/assets/images/github-fill.png",
      icon3: "/src/assets/images/school-fill.png",
      id: 1,
    },
    {
      img: "/src/assets/images/michel_avatar.svg",
      name: "Michel",
      title: "Team member",
      icon1: "/src/assets/images/linkedin-box-fill.png",
      icon2: "/src/assets/images/github-fill.png",
      icon3: "/src/assets/images/school-fill.png",
      id: 2,
    },
    {
      img: "/src/assets/images/Bergeline_avatar.png",
      name: "Bergeline",
      title: "Team member",
      icon1: "/src/assets/images/linkedin-box-fill.png",
      icon2: "/src/assets/images/github-fill.png",
      icon3: "/src/assets/images/school-fill.png",
      id: 3,
    },
    {
      img: "/src/assets/images/mafia.png",
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
    <div className="about-container" ref={containerRef}>
      {abouts.map((about) => (
        <div className="about-bis" key={about.id}>
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
              <img src={about.img} alt="avatar" className="avatar-btn-img" />
              <p>{about.name}</p>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default About;
