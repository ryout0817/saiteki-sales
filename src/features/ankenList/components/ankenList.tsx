import React, { useState } from 'react';
import SearchForm from '../../searchForm/SearchForm.tsx';
export const AnkenList = () => {

  return (
    <div className="relative min-h-screen">
      {/* Search Form Container: Fixed to bottom-left */}
      <div className="fixed bottom-4 left-4 w-1/4 z-10">
        <SearchForm />
      </div>

      {/* Main Content */}
      <div className="pl-[28%] pr-4 py-4">
        <h1 className="text-2xl font-bold mb-4">案件一覧</h1>
        <p>ここに案件リストが表示されます。</p>
        <hr className="my-4" />
        <h2 className="text-xl font-semibold">現在の検索条件（デバッグ用）:</h2>
      </div>
    </div>
  );
};