import "./Compass.css";

interface CompassProps {
  direction: number;
}

const Compass = ({ direction }: CompassProps) => {
  const compassStyle: React.CSSProperties = {
    transform: `rotate(${direction}deg)`,
  };

  return (
    <div className="compass" style={compassStyle}>
      <div className="needle-container" />
      <span className="needle">🔺</span>
    </div>
  );
};

export default Compass;
