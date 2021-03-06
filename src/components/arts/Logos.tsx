import React from "react";
import logos from "../../content/arts/logos.json";
import LogoBox from "./LogoBox";

const Logos: React.FC = () => {
  return (
    <div>
      <h1 id="logos" className="text-center">LOGOS</h1>
      <h2 className="text-center">Icon</h2>
      <div className="flex-container">
        {logos.icon.map((element: string, index: number) => (
          <LogoBox key={index} logo={element} isIcon={true} />
        ))}
      </div>
      <h2 className="text-center">Full</h2>
      <div className="flex-container">
        {logos.full.map((element: string, index: number) => (
          <LogoBox key={index} logo={element} isIcon={false} />
        ))}
      </div>
    </div>
  );
};

export default Logos;
