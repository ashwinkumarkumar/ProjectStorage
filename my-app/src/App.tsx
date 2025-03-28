import React from 'react';
import './App.css';



interface GridItem {
  title: string;
  description: string;
}

function App() {
  const [gridItems, setGridItems] = React.useState<GridItem[]>([
    { title: "Window 1", description: "Description for window 1" },
    { title: "Window 2", description: "Description for window 2" },
    { title: "Window 3", description: "Description for window 3" },
  ]);

  const handleAddItem = () => {
    setGridItems((prevItems) => [
      ...prevItems,
      { title: `Window ${prevItems.length + 1}`, description: "" },
    ]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="menu-icon">☰</div>
      </header>
      <div className='topics-header'>
        <h2>Topics</h2>
      </div>
      <div className="grid-container">
        {gridItems.map((item, index) => (
          <div key={index} className="grid-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
        <div className="grid-item add-item" onClick={handleAddItem}>
          <h2>+</h2>
        </div>
      </div>
    </div>
  );
}

export default App;