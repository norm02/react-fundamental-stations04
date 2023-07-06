import { useEffect } from "react";
import styled from "styled-components";

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
  display: block;
`;

export const Footer = () => {
  useEffect(() => {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const element = document.getElementById("upward-logo");
    if (element) {
      element.addEventListener("click", handleClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div>
      <FooterBar>
        <CenterFooterUpward
          id="upward-logo"
          src="https://raw.githubusercontent.com/norm02/react-portfolio/d5099dfe869b6ac91cf16b9b232a02dc3be6d47a/public/images/logo-upwards.svg"
          alt="upward"
        />
      </FooterBar>
    </div>
  );
};
