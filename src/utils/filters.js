export function getFilteredEnchants(list, filters) {
  if (!Array.isArray(list)) {
    return [];
  }

  const armors = ["ALL_HELMET", "ALL_CHESTPLATE", "ALL_LEGGINGS", "ALL_BOOTS"];
  return list.filter((enchant) => {
    if (filters.applies) {
      const isFilterArmor = armors.includes(filters.applies);

      const appliesMatches =
        enchant.applies.includes(filters.applies) || // Match direto
        (isFilterArmor && enchant.applies.includes("ALL_ARMOR")); // Caso especial, pois qualquer peça de armadura deve aceitar ALL_ARMOR

      if (!appliesMatches) {
        return false;
      }
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
