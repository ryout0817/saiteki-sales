import { useState } from 'react';

export const useSearchForm = () => {
  const [freeWord, setFreeWord] = useState('');
  const [language, setLanguage] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [startDate, setStartDate] = useState('');
  const [remote, setRemote] = useState('');

  const handleClearFilter = () => {
    setFreeWord('');
    setLanguage('');
    setMinPrice('');
    setMaxPrice('');
    setLocation('');
    setMinAge('');
    setMaxAge('');
    setStartDate('');
    setRemote('');
  };

  return {
    freeWord,
    setFreeWord,
    language,
    setLanguage,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    location,
    setLocation,
    minAge,
    setMinAge,
    maxAge,
    setMaxAge,
    startDate,
    setStartDate,
    remote,
    setRemote,
    handleClearFilter,
  };
};
