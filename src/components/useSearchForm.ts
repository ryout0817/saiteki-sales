import { useState, useCallback } from 'react';

// このインターフェースは現在コンポーネント内では直接使われませんが、
// 将来的に型を共有する可能性を考慮して残しています。
export interface SearchFormValues {
  freeWord?: string;
  language?: string;
  minPrice?: string;
  maxPrice?: string;
  location?: string;
  minAge?: string;
  maxAge?: string;
  startDate?: string;
  remote?: string;
}

export const useSearchForm = () => {
  const [freeWord, setFreeWord] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [minAge, setMinAge] = useState<string>('');
  const [maxAge, setMaxAge] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [remote, setRemote] = useState<string>('');

  const handleClearFilter = useCallback(() => {
    setFreeWord('');
    setLanguage('');
    setMinPrice('');
    setMaxPrice('');
    setLocation('');
    setMinAge('');
    setMaxAge('');
    setStartDate('');
    setRemote('');
  }, []);

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
