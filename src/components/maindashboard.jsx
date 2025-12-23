import { Chip } from "@mui/material";
import leftIcon from "../assets/lefticon.svg";

const MainDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col items-start flex-1 p-4 gap-[19px] rounded-[9px] border border-[#3B3538] bg-[#2A2426]">
        <div className="flex items-center justify-between w-full">
          <span className="text-white text-sm">Total Patient</span>
          <Chip
            icon={<img src={leftIcon} alt="icon" className="w-4 h-4" />}
            label="12.5%"
            size="small"
          />
        </div>
        <span className="text-white text-xl md:text-2xl font-bold">0</span>
        <span className="text-gray-400 text-xs md:text-sm">Et mollis et fermentum eu</span>
      </div>
      <div className="flex flex-col items-start flex-1 p-4 gap-[19px] rounded-[9px] border border-[#3B3538] bg-[#2A2426]">
        <div className="flex items-center justify-between w-full">
          <span className="text-white text-sm">Pending Verifications</span>
          <Chip
            icon={<img src={leftIcon} alt="icon" className="w-4 h-4" />}
            label="12.5%"
            size="small"
          />
        </div>
        <span className="text-white text-xl md:text-2xl font-bold">0</span>
        <span className="text-gray-400 text-xs md:text-sm">Nisi a condimentum posuere</span>
      </div>
      <div className="flex flex-col items-start flex-1 p-4 gap-[19px] rounded-[9px] border border-[#3B3538] bg-[#2A2426]">
        <div className="flex items-center justify-between w-full">
          <span className="text-white text-sm">Reports Generated</span>
          <Chip
            icon={<img src={leftIcon} alt="icon" className="w-4 h-4" />}
            label="12.5%"
            size="small"
          />
        </div>
        <span className="text-white text-xl md:text-2xl font-bold">0</span>
        <span className="text-gray-400 text-xs md:text-sm">Sed placerat morbi imperdiet</span>
      </div>
    </div>
  );
};

export default MainDashboard;
