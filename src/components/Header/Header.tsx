import LogoIcon from "../../assets/stair.svg?react";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <LogoIcon width={16} height={16} className="logo__icon" />
        <span>LMC</span>
      </div>
      <div className="profile">
        <img alt="profile" src="/avatar.png" />
      </div>
    </header>
  );
};
