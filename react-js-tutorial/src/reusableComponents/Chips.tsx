import React from "react";

interface ChipsProps {
  data: string[];
  removeChip: Function; 
}

const Chips = ({data, removeChip}: ChipsProps) => {
  console.log('data seen', data);
  
  return (<div>
    {/* Chips seen here   */}

    {data.length == 0 ? (<h5>Empty Chips List</h5>) : 
      <div className="chip-list">
        {
          data.map((chip: string, index: number) => 
          <button className="chip-item" key={index}>
            {chip}
            <span onClick={() => removeChip(index)}><strong>x</strong></span>
          </button>)
        }
      </div>
    }
  </div>)
}

export default Chips;