import "./GeometricShape.css";

const GeometricShape = ({ styles, id, shape, setApplies }) => {
  const href = `/assets/images/itensIcons/${id}.png`;
  const sizes = {
    pentagonPointy: "50,0.9 97.4,34.9 79.3,90.9 20.7,90.9 2.6,34.9",
    pentagonFlat: "20.7,9.1 79.3,9.1 97.4,65.1 50,99.1 2.6,65.1",
    //octagon: "30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30",
    hexPointy:
      "50,0.035 93.275,25.018 93.275,74.982 50,99.965 6.725,74.982 6.725,25.018",
    hexFlat:
      "25.018,6.725 74.982,6.725 99.965,50 74.982,93.275 25.018,93.275 0.035,50",
  };

  return (
    <div
      className="item item-pos"
      style={{ ...styles, padding: "0", margin: "0" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 110 110"
        preserveAspectRatio="xMidYMid meet"
        onClick={() => {
          setApplies(id);
        }}
      >
        <defs>
          <linearGradient id="fillGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1C1C1C" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>

          <linearGradient id="strokeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#343434" />
            <stop offset="50%" stopColor="#272727" />
            <stop offset="100%" stopColor="#858585" />
          </linearGradient>

          <filter
            id="borderShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="5"
              floodColor="#000"
              floodOpacity="1"
            />
          </filter>
        </defs>

        {/* Borda com sombra */}
        <polygon
          points={sizes[shape]}
          fill="none"
          stroke="url(#strokeGradient)"
          strokeWidth="1"
          filter="url(#borderShadow)"
          vectorEffect="non-scaling-stroke"
        />

        {/* Hexágono preenchido */}
        <polygon
          points={sizes[shape]}
          fill="url(#fillGradient)"
          stroke="url(#strokeGradient)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        <image
          href={href}
          alt="Logo"
          className="image-pixelated"
          x="26"
          y="24"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </svg>
    </div>
  );
};

export default GeometricShape;
