var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
var LinkContainer = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #ffffff;\n  padding: 4rem;\n  height: 25rem;\n  margin-left: 8rem;\n  margin-right: 8rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n"], ["\n  background-color: #ffffff;\n  padding: 4rem;\n  height: 25rem;\n  margin-left: 8rem;\n  margin-right: 8rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n"])));
var LinkTitleContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 40%;\n  padding-right: 2rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n"], ["\n  width: 40%;\n  padding-right: 2rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n"])));
var LinkDescriptionContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 60%;\n  font-size: 1.5rem;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"], ["\n  width: 60%;\n  font-size: 1.5rem;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"])));
var LinkItem = styled.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style: none;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"], ["\n  list-style: none;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"])));
var Linkurl = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
export var LinkContents = function () {
    return (_jsx("div", { children: _jsxs(LinkContainer, { children: [_jsx(LinkTitleContainer, { children: _jsx("h2", { children: "Link" }) }), _jsxs(LinkDescriptionContainer, { children: [_jsx(LinkItem, { children: _jsx(Linkurl, { href: "https://bonomodel.hatenablog.com/", children: "Blog" }) }), _jsx(LinkItem, { children: _jsx(Linkurl, { href: "href=https://github.com/norm02", children: "GitHub" }) }), _jsx(LinkItem, { children: _jsx(Linkurl, { href: "https://twitter.com/bonomodel", children: "Twitter" }) })] })] }) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
