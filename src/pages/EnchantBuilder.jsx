import { useState } from "react";
import EnchantsList from "../components/EnchantsComponents/EnchantsList";
import Inventory from "../components/EnchantsComponents/Inventory";
import "./EnchantBuilder.css";
import AppliedEnchantments from "../components/EnchantsComponents/AppliedEnchantments";
import EnchantmentDescription from "../components/EnchantsComponents/EnchantmentDescription";

const EnchantBuilder = () => {
  const [applyFilter, setApplyFilter] = useState();
  const [selectedEnchant, setSelectedEnchant] = useState();
  const [build, setBuild] = useState({});

  return (
    <main className="enchant-builder-body">
      <div className="grid1">
        <EnchantsList
          applies={applyFilter}
          setApplies={setApplyFilter}
          setEnchant={setSelectedEnchant}
          build={build}
          setBuild={setBuild}
        />
      </div>
      <div className="grid2">
        <div className="grid2-division">
          <div className="up">
            <AppliedEnchantments
              applies={applyFilter}
              build={build}
              setBuild={setBuild}
            />
          </div>
          <div className="down">
            <EnchantmentDescription enchant={selectedEnchant} />
          </div>
        </div>
      </div>
      <div className="grid3">
        <div className="grid3-aligment">
          <Inventory setApplyFilter={setApplyFilter} />
        </div>
      </div>
    </main>
  );
};

export default EnchantBuilder;
