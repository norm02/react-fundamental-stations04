import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "../components/Header";
import { Top } from "../components/Top";
import { Footer } from "../components/Footer";
import { AboutContents } from "../components/AboutContents";
import { SkillContents } from "../components/SkillContents";
import { LinkContents } from "../components/LinkContents";
export var Home = function () {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx(Top, {}), _jsx("main", { children: _jsxs("section", { children: [_jsx(AboutContents, {}), _jsx(SkillContents, {}), _jsx(LinkContents, {})] }) }), _jsx(Footer, {})] }));
};
