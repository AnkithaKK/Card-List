import React, { useState } from 'react';
import YourCardsTab from './YourCardsTab';
import AllCardsTab from './AllCardsTab';
import BlockedCardsTab from './BlockedCardsTab';

const CardListingPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCardType, setSelectedCardType] = useState('');
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedCardholder, setSelectedCardholder] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleCardTypeChange = (event) => {
    setSelectedCardType(event.target.value);
  };

  const handleFilterClick = () => {
    setFilterOpen(!isFilterOpen);
  };

  const handleCardholderChange = (event) => {
    setSelectedCardholder(event.target.value);
  };

  return (
    <div className="tab-navigation">
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'your' ? 'active' : ''}`}
          onClick={() => handleTabClick('your')}
        >
          Your
        </button>
        <button
          className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        <button
          className={`tab-button ${activeTab === 'blocked' ? 'active' : ''}`}
          onClick={() => handleTabClick('blocked')}
        >
          Blocked
        </button>

      </div>

      <div className="filter-container">
        <div className="search-section">
            <div className="search-icon" onClick={handleSearchClick}>
                {/* Search icon */}
            </div>
            {isSearchOpen && (
                <div className="search-input">
                    <input type="text" placeholder="Search..." />
                    <button className="search-button">Search</button>
                </div>
            )}
        </div>
        <button className="filter-option" onClick={handleFilterClick}>Filter</button>
        {isFilterOpen && (
          <div className="filter-block">
            <div className="filter-option">
              <label htmlFor="cardTypeFilter">Card Type:</label>
              <div className="checkbox-container">
                <label>
                  <input 
                    type="checkbox"
                    value="burner"
                    checked={selectedCardType === 'burner'}
                    onChange={handleCardTypeChange}
                  />
                  Burner
                </label>
                <label>
                  <input
                  className='type'
                    type="checkbox"
                    value="subscription"
                    checked={selectedCardType === 'subscription'}
                    onChange={handleCardTypeChange}
                  />
                  Subscription
                </label>
              </div>
            </div>

            <div className="filter-option">
              <div className='cardholder-section'>
                <label htmlFor="cardholder">Cardholder:</label>
                <select
                  id="cardholder" className='cardholder-dropdown'
                  value={selectedCardholder}
                  onChange={handleCardholderChange}
                >
                  <option value="cardholder1">Cardholder 1</option>
                  <option value="cardholder2">Cardholder 2</option>
                  {/* Add more cardholder options here */}
                </select>
              </div>
              <div className="button-group">
                <button className="apply-button">Apply</button>
                <button className="clear-button">Clear</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {activeTab === 'your' && <YourCardsTab cardTypeFilter={selectedCardType} />}
      {activeTab === 'all' && <AllCardsTab cardTypeFilter={selectedCardType} />}
      {activeTab === 'blocked' && <BlockedCardsTab cardTypeFilter={selectedCardType} />}
    </div>

  );
};

export default CardListingPage;
