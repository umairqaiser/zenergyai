import { Chip } from "@mui/material";
import leftIcon from "../assets/lefticon.svg";
import { DASHBOARD_STATS } from "../constant/constant";

const MainDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {DASHBOARD_STATS.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-start flex-1 p-4 gap-[19px] rounded-[9px] border border-neutral-700 bg-neutral-800"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-white font-inter text-sm font-normal leading-[21px] tracking-[0.07px]">
              {stat.title}
            </span>
            <Chip
              icon={<img src={leftIcon} alt="icon" className="w-4 h-4" />}
              label={stat.percentageChange}
              size="small"
            />
          </div>
          <span className="text-white font-inter text-[30px] font-semibold leading-[30px] tracking-[-1px] md:text-2xl font-bold">
            0
          </span>
          <span className="text-neutral-400 font-inter text-[12px] font-normal leading-[16px] tracking-[0.18px] md:text-sm">
            {stat.description}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MainDashboard;
