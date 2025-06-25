import "./AppliedEnchantments.css";
import translator from "/src/utils/translator.json";

const MAX_ENCHANTS = 4;

const AppliedEnchantments = ({ applies, build, setBuild }) => {
  const appliedEnchantments = build[applies];
  const imageRef = applies
    ? `/assets/images/itensIcons/${applies}.png`
    : `/assets/images/itensIcons/pergaminho8.png`;

  function downloadBuild() {
    const formattedText = formatEnchantments(build);
    const element = document.createElement("a");
    const file = new Blob([formattedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "build";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function formatEnchantments(obj) {
    let output = "";

    for (const category in obj) {
      output += `${translator[category]}:\n`;

      obj[category].forEach((enchant) => {
        output += `- ${enchant.display} ${enchant.levels}\n`;
      });

      output += `\n`; // Linha em branco entre categorias
    }

    return output;
  }

  const handleRemoveEnchant = (id) => {
    const newBuild = appliedEnchantments.filter((item) => {
      if (item.id !== id) {
        return true;
      }
    });

    setBuild((prevBuild) => ({
      ...prevBuild,
      [applies]: newBuild,
    }));
  };

  const renderWarning = (enchant) => {
    let warning = false;

    for (const key in build) {
      if (key === applies) continue;
      const valuesForKey = build[key];

      valuesForKey.forEach((item) => {
        if (item.id === enchant) {
          warning = true;
        }
      });
    }

    if (warning) {
      return (
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "0.8rem", color: "#a33737", cursor: "auto" }}
        >
          warning
        </span>
      );
    }
  };

  const renderEnchantment = (enchant) => {
    const display = enchant.display || "Slot disponível";
    const bookIcon =
      enchant === "empty"
        ? "/assets/images/itensIcons/pergaminho8.png"
        : `/assets/images/itensIcons/pergaminho_${enchant.group.toLowerCase()}.png`;

    return (
      <div key={enchant.id} className="applied-enchantment">
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <img src={bookIcon} className="icon-list image-pixelated"></img>
          <span>{display}</span>
          {renderWarning(enchant.id)}
        </div>

        {enchant.id && (
          <span
            onClick={() => handleRemoveEnchant(enchant.id)}
            className="material-symbols-outlined"
          >
            delete
          </span>
        )}
      </div>
    );
  };

  const renderList = () => {
    const fullList = [];

    // Constrói uma lista tamanho igual à "MAX_ENCHANTS", com os enchants da build
    // ou valor vazio se não tiver nada aplicado, para conseguir renderizá-los
    for (let i = 0; i < MAX_ENCHANTS; i++) {
      if (!appliedEnchantments) {
        fullList.push("empty");
        continue;
      }

      if (appliedEnchantments[i]) {
        fullList.push(appliedEnchantments[i]);
      } else {
        fullList.push("empty");
      }
    }

    return <>{fullList.map((enchant) => renderEnchantment(enchant))}</>;
  };

  return (
    <div className="box">
      <div className="item-build-box">
        <div className="item-build">
          <img src={imageRef} alt="Logo" className="image-pixelated" />
          <p>{translator[applies] || "Nenhum item selecionado"}</p>
        </div>
        <div className="build-list">{renderList()}</div>
        <div className="save-build">
          <span>Exportar configurações</span>
          <span
            onClick={() => downloadBuild()}
            className="material-symbols-outlined"
          >
            download
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppliedEnchantments;
