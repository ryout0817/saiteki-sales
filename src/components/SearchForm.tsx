import React from 'react';
import { useSearchForm } from './useSearchForm';
import { INPUT_BASE_CLASS } from '../styles/styleConstants';
import { REMOTE_OPTIONS } from '../features/searchForm/search-form-list'; // Import REMOTE_OPTIONS

export const SearchForm: React.FC = () => {
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
    <>
      {/* Main container with styling from markdown */} 
      <div className="bg-white w-64 h-[512px] flex flex-col m-4 p-4 shadow-lg">
        {/* Free Word */} 
        <div className="mb-4"> {/* Added margin-bottom for spacing */} 
          <input
            type="text"
            placeholder="フリーワード"
            value={freeWord}
            onChange={(e) => setFreeWord(e.target.value)}
            className={`w-full p-2 ${INPUT_BASE_CLASS}`}
          />
        </div>

        {/* Language */} 
        <div className="flex items-center mt-3">
          <div className="text-sm w-16 shrink-0">言語</div>
          <input
            type="text"
            placeholder="例) Java Ruby"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full p-2`}
          />
        </div>

        {/* Min/Max Price */} 
        <div className="flex items-center mt-3">
          <div className="text-sm w-16 shrink-0">単価</div>
          <input
            type="text"
            placeholder="万円"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
          />
          <span>〜</span>
          <input
            type="text"
            placeholder="万円"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
          />
        </div>

        {/* Location */} 
        <div className="flex items-center mt-3">
          <div className="text-sm w-16 shrink-0">場所</div>
          <input
            type="text"
            placeholder="例)品川駅"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full p-2`}
          />
        </div>

        {/* Min/Max Age */} 
        <div className="flex items-center mt-3">
          <div className="text-sm w-16 shrink-0">年齢</div>
          <input
            type="text"
            placeholder="歳"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
          />
          <span>〜</span>
          <input
            type="text"
            placeholder="歳"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full text-center p-1`}
          />
        </div>

        {/* Start Date */} 
        <div className="flex items-center mt-3">
          <div className="text-sm w-16 shrink-0">稼働開始</div>
          <input
            type="text"
            placeholder="年 / 月 / 日"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full p-2`}
          />
        </div>

        {/* Remote Availability */} 
        <div className="flex items-center mt-3">
          <div className="text-sm w-16 shrink-0">リモート可否</div>
          <select
            value={remote}
            onChange={(e) => setRemote(e.target.value)}
            className={`${INPUT_BASE_CLASS} w-full mt-1 p-2 text-gray-500 h-10`}
          >
            {REMOTE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Buttons */} 
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleClearFilter}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            クリア
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            検索
          </button>
        </div>
      </div>
    </>
  );
};