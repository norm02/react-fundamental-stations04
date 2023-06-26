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
        customBurgerIcon={<img src={"./images/log-menu.svg"} alt="menu" />}
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
