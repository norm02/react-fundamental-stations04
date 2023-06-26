import styled from "styled-components";
import { useState } from "react";

const FooterBar = styled.header`
  height: 5rem;
  background-color: #dacb8d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterFooterUpward = styled.img`
  padding: 1rem;
  margin-right: 1.5rem;
  top: 0;
  transition: top 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    top: -5px;
  }
`;

export const Footer = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  const handleScroll = () => {
    setIsTop(true);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <FooterBar>
        <CenterFooterUpward
          src="./react-self-introduction/logo-upwards.svg"
          alt="upward"
          onClick={handleClick}
          style={{ display: isTop ? "none" : "block" }}
        />
      </FooterBar>
    </div>
  );
};
