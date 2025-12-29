import FMS from "./fms";
import Gait from "./gait";
import Metabolic from "./metabolic";
import Mobility from "./mobility";

const ManualDataInput = ({ selectedModalities = [] }) => {
  const showFMS = selectedModalities.includes("FMS");
  const showGait = selectedModalities.includes("Gait (Ochy)");
  const showMetabolic = selectedModalities.includes("Metabolic");
  const showMobility = selectedModalities.includes("Mobility");
  const showAll = selectedModalities.length === 0;

  return (
    <div className="flex flex-col gap-4">
      {(showFMS || showAll) && <FMS />}
      {(showGait || showAll) && <Gait />}
      {/*
      {(showMetabolic || showAll) && <Metabolic />}
      {(showMobility || showAll) && <Mobility />}
      */}
    </div>
  );
};

export default ManualDataInput;
