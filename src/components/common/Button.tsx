import React from "react";

interface ButtonProps {
  text: string;
  bg: string;
  px?: string;
  py?: string;
}

const Button: React.FC<ButtonProps> = ({ text, bg, px, py }) => {
  return (
    <button
      style={{
        paddingRight: px,
        paddingLeft: px,
        paddingTop: py,
        paddingBottom: py,
      }}
      className={`${bg} text-white text-xl font-medium border-t-[3px] border-l-[3px] border-r-[8px] border-b-[8px] border-black transition-all duration-750 delay-200 hover:border-r-[3px] hover:border-b-[3px] hover:translate-x-4 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
