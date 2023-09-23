import React, { useState } from 'react';

const CategoryDropdown = ({ category, subcategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='category-dropdown'>
      <div className='category-heading' onClick={toggleDropdown}>
        {category}
        {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
      </div>
      {isOpen && (
        <ul className='subcategory-list'>
          {subcategories.map((subcategory, index) => (
            <li key={index}>{subcategory}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
