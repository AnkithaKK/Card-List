import React from 'react';

const BlockedCardsTab = ({ cardTypeFilter }) => {
  // Sample data for card items
  const cardItems = [
    {
      id: 1,
      name: 'LinkedIn',
      budgetName: 'Memberfive Budget',
      amount: '300 SGD',
      frequency: 'Monthly',
      expiry: '21 July 2021',
      spent: '7890 SGD',
      balance: '7890 SGD',
    },
    {
      id: 2,
      name: 'Marketing ads',
      budgetName: 'Memberfive Budget',
      amount: '300 SGD',
      frequency: 'Monthly',
      expiry: '21 July 2021',
      spent: '7890 SGD',
      balance: '7890 SGD',
    },
    {
      id: 3,
      name: 'Offsite event',
      budgetName: 'Memberfive Budget',
      amount: '300 SGD',
      frequency: 'Monthly',
      expiry: '21 July 2021',
      spent: '7890 SGD',
      balance: '7890 SGD',
    },
    {
      id: 4,
      name: 'Travel allowance Card',
      budgetName: 'Memberfive Budget',
      amount: '300 SGD',
      frequency: 'Monthly',
      expiry: '21 July 2021',
      spent: '7890 SGD',
      balance: '7890 SGD',
    },
    {
      id: 5,
      name: 'AWS Card',
      budgetName: 'Memberfive Budget',
      amount: '300 SGD',
      frequency: 'Monthly',
      expiry: '21 July 2021',
      spent: '7890 SGD',
      balance: '7890 SGD',
    },
    {
      id: 6,
      name: 'Netflix Card',
      budgetName: 'Memberfive Budget',
      amount: '300 SGD',
      frequency: 'Monthly',
      expiry: '21 July 2021',
      spent: '7890 SGD',
      balance: '7890 SGD',
    },
    
    // Add more card items here
  ];

  return (
    <div className="all-cards-tab">
      {cardItems.map((card) => (
        <div key={card.id} className="card-item">
          <div className="card-details">
            <div className="card-name">{card.name}</div>
            <div className="budget-name">{card.budgetName}</div>
          </div>
          <table className="card-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Frequency</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{card.amount}</td>
                <td>{card.frequency}</td>
                <td>{card.expiry}</td>
              </tr>
            </tbody>
          </table>
          <div className="cylindrical-bar">
            <div className="spent" style={{ width: '54%' }}></div>
            <div className="balance" style={{ width: '46%' }}></div>
          </div>

          <ul className="legend">
            <li><span className="dot spent-dot"></span>Spent
            <span className='spent-val'>{card.spent}</span></li>
            <li><span className="dot balance-dot"></span>Balance
            <span className='balance-val'>{card.balance}</span></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlockedCardsTab;
