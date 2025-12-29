import { useState } from "react";
import { TextField } from "@mui/material";
import { GAIT_ROWS, GAIT_INITIAL_VALUES, TABLE_HEADERS } from "../constant/constant";

const Gait = () => {
  const [values, setValues] = useState(GAIT_INITIAL_VALUES);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };
  const gaitTotalScore = GAIT_ROWS.reduce((total, row) => {
    const value = parseFloat(values[row.field]) || 0;
    return total + value;
  }, 0);

  return (
    <div className="flex flex-col self-stretch bg-[#141112] overflow-hidden border border-[#3B3538] rounded-lg max-h-[500px]">
      <div className="grid grid-cols-3 bg-[#2A2426] border-b border-[#3B3538] flex-shrink-0">
        {TABLE_HEADERS.GAIT.map((header, index) => (
          <div
            key={header}
            className={`py-4 px-6 text-center ${index < TABLE_HEADERS.GAIT.length - 1 ? "border-r border-[#3B3538]" : ""}`}
          >
            <span className="text-white font-inter text-sm font-medium uppercase tracking-wider">
              {header}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col overflow-y-auto fms-scrollbar">
        {GAIT_ROWS.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-[#3B3538] last:border-b-0"
          >
            <div className="flex items-center justify-center p-4 border-r border-[#3B3538]">
              <span className="text-white font-inter text-sm text-center">
                {row.label}
              </span>
            </div>
            <div className="flex items-center justify-center p-2 border-r border-[#3B3538]">
              <TextField
                type="text"
                value={values[row.field]}
                onChange={handleChange(row.field)}
                variant="outlined"
                size="small"
                className="gait-input-field"
                placeholder="0"
                sx={{ flex: 1, mx: 2 }}
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <span className="text-neutral-50 font-inter text-sm font-medium">
                {values[row.field] || 0}
              </span>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 border-t border-[#3B3538]">
          <div className="flex items-center justify-center p-4 border-r border-[#3B3538]">
            <span className="text-neutral-50 font-inter text-sm font-bold uppercase tracking-wider">
              GAIT TOTAL SCORE
            </span>
          </div>
          <div className="p-4 border-r border-[#3B3538]"></div>
          <div className="flex items-center justify-center p-4">
            <span className="text-neutral-50 font-inter text-lg font-bold">
              {gaitTotalScore}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gait;
