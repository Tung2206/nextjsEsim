import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/navigation';

export const AutosuggestComponent = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const getSuggestions = (value) => {
    return data.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  };

  const onSuggestionChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    const searchQuery = suggestion.title;
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form className='position-relative mb-3 ' >
      <img src="../search.png" alt="search" />
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={item => item.title}
        renderSuggestion={item => (
          <div>
            <img src={item.country_image_url} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        )}
        inputProps={{
          placeholder: 'Search by country name...',
          value: searchValue,
          onChange: onSuggestionChange
        }}
        onSuggestionSelected={onSuggestionSelected}
      />
    </form>
  );
};
