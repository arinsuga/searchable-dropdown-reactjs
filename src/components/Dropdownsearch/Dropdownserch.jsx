import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Dropdownsearch.css'

import { options } from "./options";
import { SearchSelect } from "./SearchSelect";
  
export const Dropdownsearch = ({ placeholder, searchable }) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);


    const filterMethod = (options, query) => {
      return options.filter(option => option.toLowerCase().includes(query.toLowerCase()))
    }

    const showDropdown = () => {
        setDropdownVisible(true)
    }

    const hideDropdown = () => {
      setDropdownVisible(false)
    }

    return (
      <SearchSelect 
          options={options} 
          searchable={searchable}
          filterMethod={filterMethod} 
          render={({results, searchList}) => (
          <div className="autocomplete">
              <input 
              type="text"
              placeholder={ placeholder }
              onChange={searchList}
              onFocus={() => showDropdown()}
              onBlur={() => hideDropdown()}
              />
              
              {(() => {

                if (dropdownVisible) {
                  
                  return (
                    <div className="autocomplete-dropdown">
                        <ul className="autocomplete-search-results-list">
                        {results.map(result => (
                            <li className="autocomplete-search-result" key={result}>{result}</li>
                        ))}
                        </ul>
                    </div>
                  );

                }

              })()}

          </div>
          )}
          />
      )

}
  
