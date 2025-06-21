import {
  getEnchantments,
  getCategories,
} from "/src/utils/enchantmentExtractor";
import { getFilteredEnchants } from "/src/utils/filters";

import { useEffect, useState } from "react";
import "./EnchantsList.css";
import { useForm } from "react-hook-form";
import translator from "/src/utils/translator.json";

const MAX_ENCHANTS = 4;
const EnchantsList = ({ applies, setApplies, setEnchant, build, setBuild }) => {
  // Variáveis de formulários
  const { register, getValues, watch } = useForm();
  const watchedName = watch("name");
  const watchedCategories = watch("categories");

  // Dados globais
  const [enchants, setEnchants] = useState([]);
  const [categories, setCategories] = useState();
  const [data, setData] = useState([]);

  // Ação ao clicar em adicionar encantamento
  const handleBuilder = (enchant) => {
    if (!applies) return;
    const enchantsOnItem = build[applies];

    if (enchantsOnItem !== undefined) {
      const totalAppliedOnItem = enchantsOnItem.length;

      if (totalAppliedOnItem >= MAX_ENCHANTS) {
        console.warn("Máximo de encantamentos atingido para " + applies);
        return;
      }

      if (enchantsOnItem.includes(enchant)) {
        console.warn("Esse encantamento já está aplicado em " + applies);
        return;
      }
    }

    setBuild((prevBuild) => ({
      ...prevBuild,
      [applies]: [...(prevBuild[applies] || []), enchant],
    }));
    console.log("Encantamento adicionado");
  };

  // Aplicar filtros toda vez que algum estado relacionado à filtro se alterar
  useEffect(() => {
    const filters = {
      applies: applies,
      name: getValues("name"),
      categories: getValues("categories"),
    };

    const filteredEnchants = getFilteredEnchants(enchants, filters);
    setData(filteredEnchants);
  }, [applies, watchedName, JSON.stringify(watchedCategories)]);

  // Dados iniciais
  useEffect(() => {
    async function loadData() {
      const enchants = await getEnchantments();
      const cats = await getCategories();

      setCategories(cats);
      setEnchants(enchants);
      setData(enchants);
    }

    loadData();
  }, []);

  return (
    <div className="box">
      <div className="enchantment-list-box">
        <form className="filters">
          <div className="search-bar">
            <div className="SearchInput__wrapper">
              <input
                type="text"
                className="SearchInput"
                {...register(`name`)}
                style={{ width: "100%" }}
                placeholder="Procurar"
                autoComplete="off"
              />
              <span className="material-symbols-outlined SearchIcon">
                search
              </span>
            </div>
          </div>

          <br></br>
          <div className="radios">
            {categories &&
              categories.map((categorieName) => (
                <label key={categorieName}>
                  <input
                    type="checkbox"
                    defaultChecked
                    {...register(`categories.${categorieName}`)}
                  />
                  <span>{categorieName}</span>
                </label>
              ))}
          </div>
        </form>

        <div className="enchantment-list">
          {data &&
            data.map((enchant, i) => {
              const enchantmentsForItem = build[applies] || [];
              const isOnBuild = enchantmentsForItem.some(
                (item) => item.id === enchant.id
              );

              return (
                <div className="enchantment" key={i}>
                  <div
                    className="enchant-and-book"
                    onClick={() => setEnchant(enchant)}
                  >
                    <img
                      src={`/assets/images/itensIcons/${enchant.group.toLowerCase()}.png`}
                      className="icon-list image-pixelated"
                    ></img>
                    <span>{enchant.display}</span>
                  </div>

                  {!isOnBuild && applies && (
                    <span
                      onClick={() => handleBuilder(enchant)}
                      className="material-symbols-outlined add-button"
                    >
                      add_2
                    </span>
                  )}
                </div>
              );
            })}
        </div>

        <div className="clear-item-filter">

            <span>Filtro de item atual: {translator[applies] || "Nenhum"}</span>

          <span
            onClick={() => setApplies()}
            className="material-symbols-outlined clear-button"
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnchantsList;
