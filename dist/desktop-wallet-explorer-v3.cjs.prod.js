'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const explorerUrls = {
  "ARK Explorer - APN": "https://explorer.ark.io/",
  "ARK Explorer - APN Devnet": "https://dexplorer.ark.io/"
};
var index = (api => {
  const App = () => {
    const [selectedLabel, setSelectedLabel] = React__default['default'].useState("ARK Explorer - APN");
    return /*#__PURE__*/React__default['default'].createElement("section", {
      className: "flex-1 border-t-3 border-theme-danger-500 bg-theme-neutral-200 flex flex-col justify-center"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex items-center justify-center divide-x divide-theme-secondary-600 py-4 shadow-md z-20"
    }, Object.keys(explorerUrls).map(explorerLabel => /*#__PURE__*/React__default['default'].createElement("button", {
      className: `px-4 py-2 ${selectedLabel === explorerLabel ? 'font-bold' : ''}`,
      onClick: () => setSelectedLabel(explorerLabel)
    }, explorerLabel))), /*#__PURE__*/React__default['default'].createElement("webview", {
      className: "w-full h-full",
      src: explorerUrls[selectedLabel]
    }));
  };

  api.launch().render( /*#__PURE__*/React__default['default'].createElement(App, null));
});

exports.default = index;
