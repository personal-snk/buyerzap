import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import './style.scss';


export default function SearchBar(props) {

  const [search, setSearch] = useState("");
  const history = useHistory();

  const queryString = props.queryString;

    useEffect(() => {
    console.log(queryString);
    setSearch(queryString)
    }, [queryString])

    const options = [
        {
          name: 'Where can I find grocery services near me?',
          value: 'Where can I find grocery services near me?'
        },
        {
          name: 'Where can I find grocery services in Bengaluru?',
          value: 'Where can I find grocery services in Bengaluru?'
        },
        {
          name: 'Where can I find grocery services in India?',
          value: 'Where can I find grocery services in India?'
        },
        {
          name: 'Where can I find grocery services near me?',
          value: 'Where can I find grocery services near me?'
        }
      ];

    const handleChange = (query) => {
      setSearch(query);
      history.push(`/searchResults?query=${query}`)
    }

    return (
    <form class="flex w-[95%]">   
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>       
            <SelectSearch 
            className="select-search" 
            options={options} 
            onChange={handleChange}
            name="language" 
            value={search}
            placeholder="" search/>
        </div>
    </form>
    /* Simple example */
    );
}




