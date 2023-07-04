var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
var TopContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #dacb8d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10rem;\n  margin-top: 7rem;\n"], ["\n  background-color: #dacb8d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10rem;\n  margin-top: 7rem;\n"])));
var PortfolioText = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 70%;\n  height: auto;\n"], ["\n  width: 70%;\n  height: auto;\n"])));
export var Top = function () {
    return (_jsx("div", { children: _jsx(TopContainer, { children: _jsx(PortfolioText, { src: "https://raw.githubusercontent.com/norm02/react-portfolio/8530023cf2f1ed24f595739d72abb15838d4be2c/public/images/portfolio-text.svg", alt: "Text" }) }) }));
};
var templateObject_1, templateObject_2;
