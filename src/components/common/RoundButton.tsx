import React from "react";

interface RoundButtonProps {
  icon: React.ReactNode;
  bg: string;
  height: string;
  width: string;
  onClick?: () => void;
}
const RoundButton: React.FC<RoundButtonProps> = ({
  icon,
  bg,
  width,
  height,
  onClick,
}) => {
  return (
    <>
      <button
        style={{
          width: width,
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
        className={`${bg} border-t-[3px] border-l-[3px] border-r-[6px] border-b-[6px] border-black transition-all duration-750 delay-200 hover:border-r-[3px] hover:border-b-[3px] hover:translate-x-2 rounded-full`}
      >
        {icon}
      </button>
    </>
  );
};

export default RoundButton;
