import React, { useState } from 'react';
import '../assests/CSS/Navbar.css';

const categoriesData = [
  {
    category: 'Jewellery & Accessories',
    subcategories: [
      'Accessories',
      'Bags & Purses',
      'Necklaces',
      'Rings',
      
    ],
  },
  {
    category: 'Clothing & Shoes',
    subcategories: [
      'Accessories',
      'Bags & Purses',
      'Necklaces',
      'Rings',
    ],
  },
  // Add more categories and subcategories as needed
];

const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <nav className='navbar'>
      <div className='top-bar'>
        <div className='left-section'>
          <div className='logo'>
            <img src="your-logo-url.png" alt="Your Logo" />
          </div>
        </div>
        <div className='center-section'>
          <div className='search'>
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>
        <div className='actions'>
            <div className='signin'>
              <button>Sign In</button>
            </div>
            <div className='cart'>
              <button>Cart</button>
            </div>
          </div>
      </div>
      <div className='categories'>
        <ul>
          {categoriesData.map((categoryData, index) => (
            <li
              key={index}
              className='category'
              onMouseEnter={() => handleCategoryHover(categoryData)}
              onMouseLeave={handleCategoryLeave}
            >
              {categoryData.category}
              {hoveredCategory === categoryData && (
                <ul className='subcategory-list'>
                  {categoryData.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className='subcategory'>
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
