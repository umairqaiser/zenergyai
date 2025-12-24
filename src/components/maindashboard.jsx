import { Chip } from "@mui/material";
import leftIcon from "../assets/lefticon.svg";

const MainDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col items-start flex-1 p-4 gap-[19px] rounded-[9px] border border-[#3B3538] bg-[#2A2426]">
        <div className="flex items-center justify-between w-full">
          <span className="text-white font-[inter] text-sm font-normal leading-[21px] tracking-[0.07px]">Total Patient</span>
          <Chip
            icon={<img src={leftIcon} alt="icon" className="w-4 h-4" />}
            label="+12.5%"
            size="small"
          />
        </div>
        <span className="text-white font-[inter] text-[30px] font-semibold leading-[30px] tracking-[-1px] md:text-2xl font-bold">0</span>
        <span className="text-[#8C868A] font-[inter] text-[12px] font-normal leading-[16px] tracking-[0.18px] md:text-sm">Et mollis et fermentum eu</span>
      </div>
      <div className="flex flex-col items-start flex-1 p-4 gap-[19px] rounded-[9px] border border-[#3B3538] bg-[#2A2426]">
        <div className="flex items-center justify-between w-full">
          <span className="text-white font-[inter] text-sm font-normal leading-[21px] tracking-[0.07px]">Pending Verifications</span>
          <Chip
            icon={<img src={leftIcon} alt="icon" className="w-4 h-4" />}
            label="+12.5%"
            size="small"
          />
        </div>
        <span className="text-white font-[inter] text-[30px] font-semibold leading-[30px] tracking-[-1px] md:text-2xl font-bold">0</span>
        <span className="text-[#8C868A] font-[inter] text-[12px] font-normal leading-[16px] tracking-[0.18px] md:text-sm">Nisi a condimentum posuere</span>
      </div>
      <div className="flex flex-col items-start flex-1 p-4 gap-[19px] rounded-[9px] border border-[#3B3538] bg-[#2A2426]">
        <div className="flex items-center justify-between w-full">
          <span className="text-white font-[inter] text-sm font-normal leading-[21px] tracking-[0.07px]">Reports Generated</span>
          <Chip
            icon={<img src={leftIcon} alt="icon" className="w-4 h-4" />}
            label="+12.5%"
            size="small"
          />
        </div>
        <span className="text-white font-[inter] text-[30px] font-semibold leading-[30px] tracking-[-1px] md:text-2xl font-bold">0</span>
        <span className="text-[#8C868A] font-[inter] text-[12px] font-normal leading-[16px] tracking-[0.18px] md:text-sm">Sed placerat morbi imperdiet</span>
      </div>
    </div>
  );
};

export default MainDashboard;
