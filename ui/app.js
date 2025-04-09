import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const landmarks = ['main', 'header', 'nav', 'aside', 'footer'];
export default function App() {
    const tagAs = (type) => {
        parent.postMessage({
            pluginMessage: {
                type: 'tag-region',
                value: type,
            },
        }, '*');
    };
    return (_jsxs("div", { className: "p-4 space-y-2", children: [_jsx("h2", { className: "text-lg font-bold mb-3", children: "Landmark Region Tagger" }), landmarks.map((tag) => (_jsxs("button", { className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded text-left", onClick: () => tagAs(tag), children: ["Tag as <", tag, ">"] }, tag)))] }));
}
