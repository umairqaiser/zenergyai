import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { MOBILITY_INPUT_FIELDS, MOBILITY_INITIAL_VALUES } from "../constant/constant";

const Mobility = () => {
  const [values, setValues] = useState(MOBILITY_INITIAL_VALUES);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <div className="flex flex-col self-stretch rounded-[9px] bg-neutral-800">
      <div className="flex items-center gap-2 p-3 sm:p-4 border-b border-neutral-700">
        <span className="text-neutral-50 font-[inter] text-base sm:text-[20px] font-semibold leading-[24px] tracking-[0]">
          Mobility
        </span>
      </div>
      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MOBILITY_INPUT_FIELDS.map((item) => (
            <div key={item.field} className="flex flex-col gap-2">
              <label className="text-neutral-50 font-inter text-xs sm:text-[14px] font-medium leading-[21px] tracking-[0.07px]">
                {item.label}
              </label>
              <TextField
                placeholder={item.label}
                value={values[item.field]}
                onChange={handleChange(item.field)}
                variant="outlined"
                fullWidth
                className="gait-textfield"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <span className="text-neutral-500 text-sm">{item.unit}</span>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobility;
