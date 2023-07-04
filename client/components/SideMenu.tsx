import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

const MenuContainer = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }
  .bm-burger-bars {
    background: #373a47;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 1rem;
`;

const MenuLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #dacb8d;
  }
`;

export const SideMenu = () => {
  return (
    <MenuContainer>
      <Menu
        right
        width={200}
        customBurgerIcon={
          <img
            src={
              "https://raw.githubusercontent.com/norm02/react-portfolio/8530023cf2f1ed24f595739d72abb15838d4be2c/public/images/logo-menu.svg"
            }
            alt="menu"
          />
        }
      >
        <MenuList>
          <MenuItem>
            <MenuLink href="https://bonomodel.hatenablog.com/">Blog</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://github.com/norm02">GitHub</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://twitter.com/bonomodel">Twitter</MenuLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </MenuContainer>
  );
};
