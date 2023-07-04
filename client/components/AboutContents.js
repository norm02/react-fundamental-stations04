var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
var AboutContainer = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #ffffff;\n  padding: 4rem;\n  height: 25rem;\n  margin-left: 8rem;\n  margin-right: 8rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n"], ["\n  background-color: #ffffff;\n  padding: 4rem;\n  height: 25rem;\n  margin-left: 8rem;\n  margin-right: 8rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n"])));
var AboutTitleContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 40%;\n  padding-right: 2rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n"], ["\n  width: 40%;\n  padding-right: 2rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n"])));
var AboutDescriptionContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 60%;\n  font-size: 1.5rem;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"], ["\n  width: 60%;\n  font-size: 1.5rem;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"])));
var AboutItem = styled.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style: none;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"], ["\n  list-style: none;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"])));
export var AboutContents = function () {
    return (_jsx("div", { children: _jsxs(AboutContainer, { children: [_jsx(AboutTitleContainer, { children: _jsx("h2", { children: "About" }) }), _jsx(AboutDescriptionContainer, { children: _jsxs(AboutItem, { children: [_jsx("p", { children: "\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u5B66\u7FD2\u4E2D" }), _jsx("p", { children: "\u73FE\u5728\u306F\u30A2\u30EB\u30D0\u30A4\u30C8\u3067\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u3057\u3066\u6D3B\u52D5\u4E2D" }), _jsx("p", { children: "\u4ECA\u306E\u30BF\u30B9\u30AF\u306FCypress\u3092\u7528\u3044\u305FE2E\u30C6\u30B9\u30C8\u306E\u81EA\u52D5\u5316" }), _jsx("p", { children: "\u307C\u3061\u307C\u3061\u697D\u3057\u304F\u304C\u30E2\u30C3\u30C8\u30FC\u3067\u3059" })] }) })] }) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
