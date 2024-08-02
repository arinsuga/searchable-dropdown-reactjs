import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*{box-sizing:border-box}body{align-items:center;background-color:#eff2f7;display:flex;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:16px;height:100vh;justify-content:center;margin:0;padding:0}@media (min-width:50rem){.wrapper{display:flex}}.example{padding:1rem}h2{font-size:1rem;margin-top:0}input{border:2px solid transparent;border-radius:4px;display:block;font-size:inherit;height:3rem;padding:.75rem;width:100%}input:focus{border-color:#587ef5;outline:0}.autocomplete{position:relative;width:20rem}.autocomplete-dropdown{background-color:#fff;box-shadow:0 2px 6px rgba(0,0,0,.1);left:0;position:absolute;top:100%;width:100%}.autocomplete-search-results-list{list-style:none;margin:0;padding:0}.autocomplete-search-result{cursor:pointer;padding:.75rem 1rem}.autocomplete-search-result:active,.autocomplete-search-result:focus,.autocomplete-search-result:hover{background-color:#f9fafc}.tag-list-search{width:20rem}.tag-list{list-style:none;margin:1rem 0;padding:0}.tag{background-color:#4a4a4a;border-radius:2px;color:#fafafa;cursor:pointer;display:inline-block;font-size:.875rem;margin:0 .25rem .25rem 0;padding:.25rem .5rem}.tag:active,.tag:focus,.tag:hover{background-color:#587ef5}";
styleInject(css_248z);

const options = ["Option 1", "Option with icon", "Long Long Option 3", "Long Long Long Option 4", "Long Long Long Long Option 5", "Long Long Long Long Long Option 6"];

const SearchSelect = ({
  options,
  filterMethod,
  render,
  searchable
}) => {
  const [results, setResults] = useState(options);
  const searchList = event => {
    if (searchable) {
      const results = filterMethod(options, event.target.value);
      setResults(results);
    } else {
      setResults(options);
    }
  };
  return render({
    results: results,
    searchList: event => searchList(event)
  });
};

const Dropdownsearch = ({
  placeholder,
  searchable
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const filterMethod = (options, query) => {
    return options.filter(option => option.toLowerCase().includes(query.toLowerCase()));
  };
  const showDropdown = () => {
    setDropdownVisible(true);
  };
  const hideDropdown = () => {
    setDropdownVisible(false);
  };
  return /*#__PURE__*/React.createElement(SearchSelect, {
    options: options,
    searchable: searchable,
    filterMethod: filterMethod,
    render: ({
      results,
      searchList
    }) => /*#__PURE__*/React.createElement("div", {
      className: "autocomplete"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: placeholder,
      onChange: searchList,
      onFocus: () => showDropdown(),
      onBlur: () => hideDropdown()
    }), (() => {
      if (dropdownVisible) {
        return /*#__PURE__*/React.createElement("div", {
          className: "autocomplete-dropdown"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "autocomplete-search-results-list"
        }, results.map(result => /*#__PURE__*/React.createElement("li", {
          className: "autocomplete-search-result",
          key: result
        }, result))));
      }
    })())
  });
};

export { Dropdownsearch };
