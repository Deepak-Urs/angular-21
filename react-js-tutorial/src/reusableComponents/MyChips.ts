// input bar to get input
// on enter click, new chip needs to be created
// if same chip name, exclusive deletion
import React, { useState } from "react";
import Chips from "./Chips";


const MyChips = () => {
  const [chipsList, setChipsList] = useState<string[]>(['hello', 'h1']);
  const [chipData, setChipData] = useState<string>('');

  const updateChipList = (e: any) => {
    if(e.key == "Enter") {
      setChipsList(chipsList => [...chipsList, chipData]);
      setChipData("");
    }
  }

  const updateChipData = (e: any) => {
    setChipData(e.target.value);
  }

  const deleteChipData = (index: number) => {
    console.log('delete data', index);
    const newChips = [...chipsList];
    newChips.splice(index, 1);
    setChipsList(newChips);
  }

  return (
  <div>
    <h1>Chips Input</h1>

    <input type="text" 
      className="form-control" 
      placeholder="Enter chip content" 
      onKeyDown={(e) => updateChipList(e)} 
      onChange={(e) => updateChipData(e)}
      value={chipData}
      />
    <p>{chipData}</p>
    
    <Chips data={chipsList} removeChip={(data) => deleteChipData(data)}/>
  </div>)
}

export default MyChips;