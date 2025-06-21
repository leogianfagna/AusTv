import { parse } from "yaml";
import yaml from "js-yaml";

export async function getEnchantments() {
  const yamlText = await fetchDecodedYAML();
  const parsedData = yaml.load(yamlText);

  return Object.entries(parsedData)
    .filter(
      ([_, enchantData]) =>
        enchantData.group !== "CONSOLE" && enchantData.group !== "ESPECIAL"
    )
    .map(([enchantName, enchantData]) => {
      const levels = enchantData.levels || {};
      const levelDescriptions = [];

      if (enchantData.description) {
        levelDescriptions.push(enchantData.description);
      }

      const sortedLevels = Object.keys(levels).sort(
        (a, b) => Number(a) - Number(b)
      );
      sortedLevels.forEach((level) => {
        const levelData = levels[level];
        if (levelData.description) {
          levelDescriptions.push(levelData.description);
        }
      });

      return {
        id: enchantName,
        display: enchantData.display.replace("%group-color%", ""),
        description: levelDescriptions,
        applies: enchantData.applies || [],
        group: capitalize(enchantData.group),
        levels: sortedLevels.length,
      };
    });
}

export async function getCategories() {
  const yamlText = await fetchDecodedYAML();
  const parsedData = parse(yamlText);

  const groups = new Set();

  Object.values(parsedData).forEach((enchantData) => {
    if (
      enchantData.group &&
      enchantData.group !== "CONSOLE" &&
      enchantData.group !== "ESPECIAL"
    ) {
      groups.add(enchantData.group);
    }
  });

  // Capitalizar a primeira letra de cada categoria
  return Array.from(groups).map((group) => {
    return group.charAt(0).toUpperCase() + group.slice(1).toLowerCase();
  });
}

function capitalize(text) {
  if (!text || typeof text !== "string") return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function base64ToUtf8(base64String) {
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const decoder = new TextDecoder("utf-8");
  return decoder.decode(bytes);
}

async function fetchDecodedYAML() {
  const response = await fetch("/enchants.txt");
  const encodedText = await response.text();
  const decodedText = base64ToUtf8(encodedText);
  return decodedText;
}
