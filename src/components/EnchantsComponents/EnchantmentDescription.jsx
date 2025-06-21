import { useEffect, useState } from "react";
import "./EnchantmentDescription.css";

const EnchantmentDescription = ({ enchant }) => {
  const [level, setLevel] = useState(1);

  const imageRef = enchant
    ? `/assets/images/itensIcons/pergaminho_${enchant.group.toLowerCase()}.png`
    : `/assets/images/itensIcons/pergaminho8.png`;

  function renderDescription(description) {
    if (!description) return null;

    // Remove códigos de cor
    const cleaned = description.replace(/&[ebf78ac]/g, "");

    // Divide no primeiro "»"
    const parts = cleaned
      .split("»")
      .map((item) => item.trim())
      .filter(Boolean);

    const firstPart = parts[0]; // antes da primeira »
    const tips = parts.slice(1); // todas as demais

    return (
      <div>
        <p className="enchantment-description">{firstPart}</p>
        {tips.map((tip, index) => (
          <div key={`desc-tip-${tip}`}>
            <span key={index} className="enchantment-tips">
              » {tip}
            </span>
            <br></br>
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    setLevel(0);
  }, [enchant])

  return enchant ? (
    <div className="box">
      <div className="enchantment-description-box">
        <div className="enchant-selected">
          <img
            src={imageRef}
            alt="Logo"
            className="image-pixelated"
          />
          <span>{enchant.display}</span>
          <div
            className="enchant-levels"
          >
            {Array.from({ length: enchant.levels }, (_, index) => (
              <span key={index} onClick={() => setLevel(index)} className={level === index ? "selected-level" : ""}>
                {index + 1}
              </span>
            ))}
          </div>
        </div>
        <div className="enchant-description">
          {enchant ? (
            <>{renderDescription(enchant.description[level])}</>
          ) : (
            <p>nada selecionado</p>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default EnchantmentDescription;
