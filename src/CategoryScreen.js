import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryScreen.css';

function CategoryScreen({ title, icon, items }) {
  const navigate = useNavigate();
  return (
    <div className="category-root">
      <div className="category-header">
        <button className="back-btn" onClick={() => navigate('/')}>חזרה למסך הראשי</button>
        <span className="category-icon">{icon}</span>
        <span className="category-title">{title}</span>
      </div>
      <div className="category-items">
        {items.map(item => (
          <div className="category-item-card" key={item.id}>
            <div className="item-title">{item.title}</div>
            <div className="item-summary">{item.summary}</div>
            {/* אפשר להוסיף כאן עוד פרטים */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryScreen; 