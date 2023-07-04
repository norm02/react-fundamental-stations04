var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
var MenuContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .bm-burger-button {\n    position: fixed;\n    width: 36px;\n    height: 30px;\n    right: 36px;\n    top: 36px;\n  }\n  .bm-burger-bars {\n    background: #373a47;\n  }\n"], ["\n  .bm-burger-button {\n    position: fixed;\n    width: 36px;\n    height: 30px;\n    right: 36px;\n    top: 36px;\n  }\n  .bm-burger-bars {\n    background: #373a47;\n  }\n"])));
var MenuList = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"], ["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"])));
var MenuItem = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 1rem;\n"], ["\n  margin-bottom: 1rem;\n"])));
var MenuLink = styled.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #ffffff;\n  text-decoration: none;\n  &:hover {\n    color: #dacb8d;\n  }\n"], ["\n  color: #ffffff;\n  text-decoration: none;\n  &:hover {\n    color: #dacb8d;\n  }\n"])));
export var SideMenu = function () {
    return (_jsx(MenuContainer, { children: _jsx(Menu, { right: true, width: 200, customBurgerIcon: _jsx("img", { src: "https://raw.githubusercontent.com/norm02/react-portfolio/8530023cf2f1ed24f595739d72abb15838d4be2c/public/images/logo-menu.svg", alt: "menu" }), children: _jsxs(MenuList, { children: [_jsx(MenuItem, { children: _jsx(MenuLink, { href: "https://bonomodel.hatenablog.com/", children: "Blog" }) }), _jsx(MenuItem, { children: _jsx(MenuLink, { href: "https://github.com/norm02", children: "GitHub" }) }), _jsx(MenuItem, { children: _jsx(MenuLink, { href: "https://twitter.com/bonomodel", children: "Twitter" }) })] }) }) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
