import { useState } from "react";
import { TextField } from "@mui/material";
import { FMS_ROWS, FMS_INITIAL_SCORES, TABLE_HEADERS } from "../constant/constant";

const FMS = () => {
  const [scores, setScores] = useState(FMS_INITIAL_SCORES);

  const handleChange = (field, isPlusMinus = false) => (e) => {
    const value = e.target.value;
    if (isPlusMinus) {
      if (value === "" || value === "+" || value === "-") {
        setScores((prev) => ({ ...prev, [field]: value }));
      }
    } else {
      const numValue = value === "" ? 0 : parseInt(value) || 0;
      setScores((prev) => ({ ...prev, [field]: numValue }));
    }
  };

  const calculateFinalScore = (rField, lField, isPlusMinus = false) => {
    if (isPlusMinus) {
      if (lField) {
        const rVal = scores[rField];
        const lVal = scores[lField];
        if (rVal === "" && lVal === "") return 0;
        if (rVal === "") return lVal;
        if (lVal === "") return rVal;
        return Math.min(parseInt(rVal) || 0, parseInt(lVal) || 0);
      }
      return scores[rField] || 0;
    }
    
    if (lField) {
      const rVal = scores[rField] || 0;
      const lVal = scores[lField] || 0;
      return Math.min(rVal, lVal);
    }
    return scores[rField] || 0;
  };

  const finalScores = {
    activeStraightLegRaise: calculateFinalScore("activeStraightLegRaiseR", "activeStraightLegRaiseL"),
    deepSquat: calculateFinalScore("deepSquat"),
    hurdleStep: calculateFinalScore("hurdleStepR", "hurdleStepL"),
    inlineLunge: calculateFinalScore("inlineLungeR", "inlineLungeL"),
    inlineLungeAnklePain: calculateFinalScore("inlineLungeAnklePainR", "inlineLungeAnklePainL", true),
    inlineLungeAnkleMobility: calculateFinalScore("inlineLungeAnkleMobilityR", "inlineLungeAnkleMobilityL"),
    rotaryStability: calculateFinalScore("rotaryStabilityR", "rotaryStabilityL"),
    rotaryStabilityFlexionClearing: calculateFinalScore("rotaryStabilityFlexionClearing", null, true),
    shoulderMobility: calculateFinalScore("shoulderMobilityR", "shoulderMobilityL"),
    shoulderClearing: calculateFinalScore("shoulderClearingR", "shoulderClearingL", true),
    trunkStabilityPushup: calculateFinalScore("trunkStabilityPushup"),
    trunkStabilityPushupExtensionClearing: calculateFinalScore("trunkStabilityPushupExtensionClearing", null, true),
  };

  const fmsTotalScore =
    finalScores.activeStraightLegRaise +
    finalScores.deepSquat +
    finalScores.hurdleStep +
    finalScores.inlineLunge +
    finalScores.rotaryStability +
    finalScores.shoulderMobility +
    finalScores.trunkStabilityPushup;

  const fmsRowsWithScores = FMS_ROWS.map((row) => {
    let finalScore;
    switch (row.label) {
      case "Active Straight Leg Raise":
        finalScore = finalScores.activeStraightLegRaise;
        break;
      case "Deep Squat":
        finalScore = finalScores.deepSquat;
        break;
      case "Hurdle Step":
        finalScore = finalScores.hurdleStep;
        break;
      case "Inline Lunge":
        finalScore = finalScores.inlineLunge;
        break;
      case "Inline Lunge Ankle Pain +/-":
        finalScore = finalScores.inlineLungeAnklePain;
        break;
      case "Inline Lunge Ankle Mobility R-Y-G":
        finalScore = finalScores.inlineLungeAnkleMobility;
        break;
      case "Rotary Stability":
        finalScore = finalScores.rotaryStability;
        break;
      case "Rotary Stability Flexion Clearing +/-":
        finalScore = finalScores.rotaryStabilityFlexionClearing;
        break;
      case "Shoulder Mobility":
        finalScore = finalScores.shoulderMobility;
        break;
      case "Shoulder Clearing +/-":
        finalScore = finalScores.shoulderClearing;
        break;
      case "Trunk Stability Pushup":
        finalScore = finalScores.trunkStabilityPushup;
        break;
      case "Trunk Stability Pushup Extension Clearing +/-":
        finalScore = finalScores.trunkStabilityPushupExtensionClearing;
        break;
      default:
        finalScore = 0;
    }
    return { ...row, finalScore };
  });

  return (
    <div className="flex flex-col self-stretch bg-[#141112] overflow-hidden border border-[#3B3538] rounded-lg max-h-[500px]">
      <div className="grid grid-cols-3 bg-[#2A2426] border-b border-[#3B3538] flex-shrink-0">
        {TABLE_HEADERS.FMS.map((header, index) => (
          <div
            key={header}
            className={`py-4 px-6 text-center ${index < TABLE_HEADERS.FMS.length - 1 ? "border-r border-[#3B3538]" : ""}`}
          >
            <span className="text-white font-inter text-sm font-medium uppercase tracking-wider">
              {header}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col overflow-y-auto fms-scrollbar">
        {fmsRowsWithScores.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-[#3B3538] last:border-b-0"
          >
            <div className="flex items-center justify-center p-4 border-r border-[#3B3538]">
              <span className="text-white font-inter text-sm text-center">
                {row.label}
              </span>
            </div>
            <div className="flex flex-col justify-center p-2 border-r border-[#3B3538]">
              {row.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="flex items-center gap-3 py-1">
                  {field.side && (
                    <span className="text-white font-inter text-sm w-6 flex-shrink-0">
                      {field.side}
                    </span>
                  )}
                  <TextField
                    type="text"
                    value={scores[field.field]}
                    onChange={handleChange(field.field, field.isPlusMinus)}
                    variant="outlined"
                    size="small"
                    className="fms-input-field"
                    placeholder={field.isPlusMinus ? "+/-" : "0"}
                    sx={{ flex: 1 }}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center p-4">
              <span className="text-neutral-50 font-inter text-sm font-medium">
                {row.finalScore}
              </span>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 border-t border-[#3B3538]">
          <div className="flex items-center justify-center p-4 border-r border-[#3B3538]">
            <span className="text-neutral-50 font-inter text-sm font-bold uppercase tracking-wider">
              FMS TOTAL SCORE
            </span>
          </div>
          <div className="p-4 border-r border-[#3B3538]"></div>
          <div className="flex items-center justify-center p-4">
            <span className="text-neutral-50 font-inter text-lg font-bold">
              {fmsTotalScore}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMS;
