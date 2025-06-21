export function getFilteredEnchants(list, filters) {
  if (!Array.isArray(list)) {
    return [];
  }

  const armors = ["ALL_HELMET", "ALL_CHESTPLATE", "ALL_LEGGINGS", "ALL_BOOTS"]
  return list.filter((enchant) => {
    // Verificar se é uma peça de armadura então precisa incluir enchants genéricos ALL_ARMOR
    if (armors.includes(filters.applies)) {
      if (enchant.applies.includes("ALL_ARMOR")) {
        return true;
      }
    }

    if (filters.applies && !enchant.applies.includes(filters.applies)) {
      return false;
    }

    if (
      filters.name &&
      !enchant.display.toLowerCase().includes(filters.name.toLowerCase())
    ) {
      return false;
    }

    if (filters.categories && Object.keys(filters.categories).length > 0) {
      const allowedCategories = Object.keys(filters.categories).filter(
        (cat) => filters.categories[cat]
      );

      if (allowedCategories.length === 0) {
        return false;
      }

      if (!allowedCategories.includes(enchant.group)) {
        return false;
      }
    }

    return true;
  });
}
