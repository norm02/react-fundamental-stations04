import styled from "styled-components";
import { SideMenu } from "../components/SideMenu";

const HeaderContainer = styled.header`
  background-color: #ffffff;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const HeaderBar = styled.header`
  background-color: #dacb8d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  padding: 1rem;
  height: 5rem;
`;

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderBar>
          <Logo src={"./images/logo2.png"} alt="logo" />
          <SideMenu />
        </HeaderBar>
      </HeaderContainer>
    </div>
  );
};
