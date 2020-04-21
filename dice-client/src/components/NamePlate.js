import React from 'react';

function NamePlate({char: { charName, initiative }}) {
  return (
    <li>
      Name: {charName}, Initiative: {initiative}
    </li>
  );
};

export default NamePlate;
