import "./Avatar.css";

interface AvatarProps {
  name: string;
  img: string;
  title: string;
  icon1: string;
  icon2: string;
  icon3: string;
}

function Avatar({ name, img, title, icon1, icon2, icon3 }: AvatarProps) {
  return (
    <div className="avatar-main-container">
      <img src={img} alt="" className="avatar-card-img" />
      <h1 className="avatar-h1">{name}</h1>
      <h2 className="avatar-role">{title}</h2>
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/">
            <img src={icon1} alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            <img src={icon2} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.wildcodeschool.com/fr-fr/">
            <img src={icon3} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Avatar;
