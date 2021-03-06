import React from "react";
import socials from "../../content/code/socials.json";
import SocialBox from "./SocialBox";
import { Social } from "../../types";

const Socials: React.FC = () => {
  return (
    <div className="text-center" id="socials">
      <h1>SOCIALS</h1>
      <p style={{ marginTop: 20 }}>{socials.about}</p>
      <div className="social-container">
        {socials.socials.map((element: Social, index) => (
          <SocialBox social={element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
