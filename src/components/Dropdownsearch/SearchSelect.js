import React, { useState } from "react";

export const SearchSelect = ({ options, filterMethod, render, searchable }) => {

    const [results, setResults]  = useState(options);
  
    const searchList = (event) => {
      if (searchable) {

        const results = filterMethod(options, event.target.value)
        setResults(results);
  
      } else {

        setResults(options);

      }
    }

    return render({ 
      results: results, 
      searchList: (event) => searchList(event) 
    })
  
}
