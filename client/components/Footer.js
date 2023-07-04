var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
var FooterBar = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 5rem;\n  background-color: #dacb8d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 5rem;\n  background-color: #dacb8d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var CenterFooterUpward = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 1rem;\n  margin-right: 1.5rem;\n  top: 0;\n  transition: top 0.2s ease-in-out;\n  &:hover {\n    opacity: 0.7;\n    cursor: pointer;\n    top: -5px;\n  }\n  display: block;\n"], ["\n  padding: 1rem;\n  margin-right: 1.5rem;\n  top: 0;\n  transition: top 0.2s ease-in-out;\n  &:hover {\n    opacity: 0.7;\n    cursor: pointer;\n    top: -5px;\n  }\n  display: block;\n"])));
export var Footer = function () {
    var handleClick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_jsx("div", { children: _jsx(FooterBar, { children: _jsx(CenterFooterUpward, { src: "https://raw.githubusercontent.com/norm02/react-portfolio/d5099dfe869b6ac91cf16b9b232a02dc3be6d47a/public/images/logo-upwards.svg", alt: "upward", onClick: handleClick }) }) }));
};
var templateObject_1, templateObject_2;
