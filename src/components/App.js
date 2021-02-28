import React, { useState, useEffect } from 'react';
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";
import "../styles.css";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JS framework"
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const options = [
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Green",
    value: "green"
  },
  {
    label: "Blue",
    value: "blue"
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="container mt-4">
      <Header />
      <Route path="/">
        <Accordion
          items={items}
        />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;


// <Accordion items={items}/>
// <Search />