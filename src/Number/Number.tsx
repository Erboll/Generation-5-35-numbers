import React from 'react';

interface NumberProps {
  number:number
}
const Number:React.FC<NumberProps> = props => {
  return (
    <div>
      <div className="numberDiv">
        <p className="number">{props.number}</p>
      </div>
    </div>
  );
};

export default Number;