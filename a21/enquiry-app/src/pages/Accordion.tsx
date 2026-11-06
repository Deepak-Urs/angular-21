import React, { useState } from 'react'

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const items = [
        {content:'a', title: 'aa'},
        {content:'b', title: 'bb'},
        {content:'c', title: 'cc'},
        {content:'d', title: 'dd'}
    ]

  const toggleAccordion = (index: any) => {
    setOpenIndex(index === openIndex ? null : index);
  }

  return (
    <div>
      {items.length > 0 ? items.map((item, index) => {
        return <div>
            <button onClick={() => toggleAccordion(index)}>
              {item.title}<span>{openIndex === index ? 'X': 'V'}</span>
            </button>
            {openIndex === index && <p>{item.content}</p>}
        </div>
      }) : <h1>No items available</h1>}
    </div>
  )
}

export default Accordion;
