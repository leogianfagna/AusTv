import Hexagon from "./GeometricShape";
import "./Inventory.css";

const Inventory = ({ setApplyFilter }) => {
  const percentageRadius = 40;

  // Calcula as 12 posições em um círculo para manter a simetria
  const positions = Array.from({ length: 12 }, (_, i) => {
    // 360 graus / 12 itens = 30 graus por item
    // Começamos em -90 graus para colocar a posição 0 no topo
    const angle = -90 + i * 30;
    const angleInRads = (angle * Math.PI) / 180; // Converte para radianos

    return {
      left: `${50 + percentageRadius * Math.cos(angleInRads)}%`,
      top: `${50 + percentageRadius * Math.sin(angleInRads)}%`,
      transform: "translate(-50%, -50%)", // Centraliza o item na coordenada
    };
  });

  const elementsPositions = [
    // Inventário principal
    {
      shape: "pentagonFlat",
      id: "ALL_HELMET",
      styles: { left: "50%", top: "30.5%", transform: "translate(-50%, -50%)" },
    },
    {
      shape: "hexPointy",
      id: "ALL_CHESTPLATE",
      styles: { left: "57.5%", top: "44%", transform: "translate(-50%, -50%)" },
    },
    {
      shape: "hexPointy",
      id: "ELYTRA",
      styles: { left: "42.5%", top: "44%", transform: "translate(-50%, -50%)" },
    },
    {
      shape: "pentagonPointy",
      id: "ALL_LEGGINGS",
      styles: { left: "50%", top: "57.5%", transform: "translate(-50%, -50%)" },
    },
    {
      shape: "pentagonFlat",
      id: "ALL_BOOTS",
      styles: { left: "50%", top: "71.5%", transform: "translate(-50%, -50%)" },
    },

    // Círculo
    {
      styles: positions[3], // Posição 3: Ponto direito (3 horas)
      shape: "hexPointy",
      id: "ALL_HOE",
    },
    {
      styles: positions[9], // Posição 9: Ponto esquerdo (9 horas)
      shape: "hexPointy",
      id: "CROSSBOW",
    },
    {
      styles: positions[1], // Posição 1: Topo-Direita
      shape: "hexPointy",
      id: "ALL_PICKAXE",
    },
    {
      styles: positions[2], // Posição 2: Meio-Direita
      shape: "hexFlat",
      id: "ALL_SPADE",
    },
    {
      styles: positions[5], // Posição 5: Baixo-Direita
      shape: "hexPointy",
      id: "SHEARS",
    },
    {
      styles: positions[4], // Posição 4: Meio-Direita
      shape: "hexFlat",
      id: "FISHING_ROD",
    },
    {
      styles: positions[7], // Posição 7: Baixo-Esquerda
      shape: "hexPointy",
      id: "SHIELD",
    },
    {
      styles: positions[8], // Posição 8: Meio-Esquerda
      shape: "hexFlat",
      id: "TRIDENT",
    },
    {
      styles: positions[11], // Posição 11: Topo-Esquerda
      shape: "hexPointy",
      id: "ALL_AXE",
    },
    {
      styles: positions[10], // Posição 10: Meio-Esquerda
      shape: "hexFlat",
      id: "BOW",
    },
    {
      // Posição 0: Ponto superior (12 horas)
      styles: positions[0],
      shape: "hexFlat",
      id: "ALL_SWORD",
    },
  ];
  return (
    <div className="inventory-container">
      {elementsPositions.map((item, i) => (
        <Hexagon
          key={i}
          shape={item.shape}
          styles={item.styles}
          id={item.id}
          setApplies={setApplyFilter}
        />
      ))}
    </div>
  );
};

export default Inventory;
