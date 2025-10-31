import React from 'react';
import { useSearchForm } from './SearchForm.ts';
import { REMOTE_OPTIONS } from './searchform-list';

const INPUT_BASE_CLASS = 'bg-gray-50 border border-gray-300 rounded text-sm h-8 box-border';

const SearchForm = () => {
  const {
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
  } = useSearchForm();

  return (
    <div className="bg-white w-64 h-[512px] flex flex-col m-4 p-4 shadow-lg">
      <input
        type="text"
        placeholder="フリーワード"
        value={freeWord}
        onChange={(e) => setFreeWord(e.target.value)}
        className={`${INPUT_BASE_CLASS} w-full p-2`}
      />
      <input
        type="text"
        placeholder="例)Java Ruby"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={`${INPUT_BASE_CLASS} w-full p-2 mt-2`}
      />
      <div className="flex mt-2">
        <input
          type="text"
          placeholder="万円"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          placeholder="万円"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
        />
      </div>
      <input
        type="text"
        placeholder="例)品川駅"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={`${INPUT_BASE_CLASS} w-full p-2 mt-2`}
      />
      <div className="flex mt-2">
        <input
          type="text"
          placeholder="歳"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
          className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          placeholder="歳"
          value={maxAge}
          onChange={(e) => setMaxAge(e.target.value)}
          className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
        />
      </div>
      <input
        type="text"
        placeholder="年 / 月 / 日"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className={`${INPUT_BASE_CLASS} w-full p-2 mt-2`}
      />
      <select
        value={remote}
        onChange={(e) => setRemote(e.target.value)}
        className={`${INPUT_BASE_CLASS} w-full mt-2 p-2 text-gray-500 h-10`}>
        {REMOTE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleClearFilter}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          検索
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
