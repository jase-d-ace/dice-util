import React from 'react';

function SearchResult({result: { name, actions, armor_class, charisma, strength, dexterity, wisdom, intelligence, constitution, damage_immunities, damage_resistances, hit_points, damage_vulnerabilities, legendary_actions, legendary_desc }}) {
  let id = 0;
  return (
    <div className="result">
      <h1>{name}</h1>
      <div className="stat-block">
        <h3>Stats</h3>
        <p>STR: {strength} | DEX: {dexterity} | CON: {constitution} | WIS: {wisdom} | INT: {intelligence} | CHA: {charisma} | AC: {armor_class} | HP: {hit_points}</p>
      </div>
      <div className="action-container">
        <h3>Actions</h3>
        <ul className="action-list">
          {
            actions.map(({name: actionName, desc}) => (
              <li key={id++}>{actionName}: {desc}</li>
            ))
          }
        </ul>
      </div>
      <div className="resistance-immunity">
        <h3>Resistances, Immunities, and Vulnerabilities</h3>
        <p>Immunities: {damage_immunities ? damage_immunities : 'none'}</p>
        <p>Resistances: {damage_resistances ? damage_resistances : 'none'}</p>
        <p>Vulnerabilities: {damage_vulnerabilities ? damage_vulnerabilities : 'none'}</p>
      </div>
    {legendary_actions ? (
      <div className="legendary-actions">
        <h3>Legendary Actions</h3>
        <p>{legendary_desc}</p>
        <ul>
          {
            legendary_actions.map(({name: legAct, desc}) =>(
              <li key={id++}>{legAct}: {desc}</li>
            ))
          }
        </ul>
      </div>
    ) : ""}
    </div>
  );
};

export default SearchResult;
