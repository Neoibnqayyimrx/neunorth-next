

import { socialHandles } from "@/constants/data";       
import "./Socials.css";
import { cssPerfectShape, convertHexToRgba } from "@/util/page";

const Socials: React.FC = () => {
  return (
    <div className="socials" role="list" aria-label="Social media links">
      {socialHandles.map((handle) => (
        <a
          key={handle.link}                      
          href={handle.link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          style={{
            ...cssPerfectShape(40, 40),
            background: convertHexToRgba("--primary", 0.2),
          }}
          aria-label={`Follow us on ${handle.name ?? "social media"}`}
        >
          <handle.icon aria-hidden="true" />
          
        </a>
      ))}
    </div>
  );
};

export default Socials;