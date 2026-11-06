import { useState, type KeyboardEvent } from "react";

const Chips = () => {
    const [inputText, setInputText] = useState('');
    const [chipsList, setChipsList] = useState(["deepak", "namaste"]);

    const generateChip = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputText.trim()) {
            setChipsList(prev => [...prev, inputText]);
            setInputText('');
        }
    }

    const deleteChip = (index: number) => {
        const originalChips = [...chipsList];
        originalChips.splice(index, 1);
        setChipsList(originalChips);
    }
    

  return (
    <>
    <div>
      <input type="text" placeholder="Type chip info" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => generateChip(e)}/>
      <p>input-text: {inputText}</p>
    </div>
    <div>
        {chipsList.map((chip, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: "gray",
              color: "white",
              padding: "6px 12px",
              margin: "5px",
              borderRadius: "16px",
            }}
          >
            {chip} 
            <span style={{color: "red"}} onClick={() => deleteChip(index)}> x</span>
          </span>
        ))}
    </div>
    
    
    </>
  )
}

export default Chips
