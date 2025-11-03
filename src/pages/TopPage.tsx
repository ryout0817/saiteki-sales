import React, { useState } from 'react';
import './topPage.css';

const TopPage: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [language, setLanguage] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [location, setLocation] = useState('');
  const [ageMin, setAgeMin] = useState('');
  const [ageMax, setAgeMax] = useState('');
  const [startDate, setStartDate] = useState('');
  const [remote, setRemote] = useState('');

  const handleClearFilters = () => {
    setKeyword('');
    setLanguage('');
    setPriceMin('');
    setPriceMax('');
    setLocation('');
    setAgeMin('');
    setAgeMax('');
    setStartDate('');
    setRemote('');
  };

  return (
    <div className="l-wrapper">
      <div className="l-header">
        <div className="l-header__inner">
          <p className="c-logo">
            Saiteki
          </p>
          <nav className="c-list">
            <ul className="c-nav__list">
              <li className="c-nav__item">
                <i className="fa-regular fa-file-lines"></i>
                <p>案件一覧</p>
              </li>
              <li className="c-nav__item">
                <i className="fa-regular fa-user"></i>
                <p>要因一覧</p>
              </li>
              <li className="c-nav__item">
                <i className="fa-regular fa-star"></i>
                <p>お気に入り一覧</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main>
        <div className="c-search">
          <div className="c-searchForm__itemInner">
            <div className="c-clearButton" onClick={handleClearFilters}>
              <p>フィルターをクリア</p>
            </div>
            <div className="c-searchForm__item">
              <input
                type="text"
                className="c-searchForm"
                id="keyword"
                name="keyword"
                placeholder="フリーワード"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="c-searchForm__item">
              <label className="c-searchForm__label">言語</label>
              <input
                type="text"
                className="c-searchForm"
                id="language"
                name="language"
                placeholder="例)Java Ruby"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </div>
            <div className="c-searchForm__item">
              <label className="c-searchForm__label">単価</label>
              <input
                type="number"
                className="c-searchForm"
                name="price_min"
                placeholder="万円"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
              />
              <p className="c-searchForm__line">〜</p>
              <input
                type="number"
                className="c-searchForm"
                name="price_max"
                placeholder="万円"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
              />
            </div>
            <div className="c-searchForm__item">
              <label className="c-searchForm__label">場所</label>
              <input
                type="text"
                className="c-searchForm"
                id="location"
                name="location"
                placeholder="（例：品川駅）"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="c-searchForm__item">
              <label className="c-searchForm__label">年齢</label>
              <input
                type="number"
                className="c-searchForm"
                name="age_min"
                placeholder="歳"
                value={ageMin}
                onChange={(e) => setAgeMin(e.target.value)}
              />
              <p className="c-searchForm__line">〜</p>
              <input
                type="number"
                name="age_max"
                placeholder="歳"
                value={ageMax}
                onChange={(e) => setAgeMax(e.target.value)}
              />
            </div>
            <div className="c-searchForm__item">
              <label className="c-searchForm__label">稼働開始</label>
              <input
                type="text"
                className="c-searchForm"
                name="start_date"
                placeholder="年/月/日"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="c-searchForm__item">
              <label className="c-searchForm__label">リモート可否</label>
            </div>
            <select
              id="remote"
              name="remote"
              value={remote}
              onChange={(e) => setRemote(e.target.value)}
            >
              <option value="">選択してください</option>
              <option value="yes">可</option>
              <option value="no">不可</option>
            </select>
          </div>
        </div>
        <div className="l-rigjt__item">
        </div>
      </main>
    </div>
  );
};

export default TopPage;


