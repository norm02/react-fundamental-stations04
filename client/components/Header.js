var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { SideMenu } from "./SideMenu";
var HeaderContainer = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #ffffff;\n  height: 5rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n"], ["\n  background-color: #ffffff;\n  height: 5rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n"])));
var HeaderBar = styled.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #dacb8d;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  background-color: #dacb8d;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var Logo = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 1rem;\n  height: 5rem;\n"], ["\n  padding: 1rem;\n  height: 5rem;\n"])));
export var Header = function () {
    return (_jsx("div", { children: _jsx(HeaderContainer, { children: _jsxs(HeaderBar, { children: [_jsx(Logo, { src: "https://github.com/norm02/react-portfolio/blob/main/public/images/logo2.png?raw=true", alt: "logo" }), _jsx(SideMenu, {})] }) }) }));
};
var templateObject_1, templateObject_2, templateObject_3;
