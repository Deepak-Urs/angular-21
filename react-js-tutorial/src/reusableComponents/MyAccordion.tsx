import { useState } from "react";

interface itemsListModel {
    title: string,
    content: string
}

interface MyAccordionProps {
    data: itemsListModel[];
}

const MyAccordion = ({ data }: MyAccordionProps) => {
    console.log('data seen', data)
    const [openIndex, setOpenIndex] = useState<number>(-1);

    const toggleContent = (index: number) => {
        setOpenIndex(index);
    }

    return (<>
        <h1>Accordion Component</h1>

        <div className="panel-group">
        {data.length == 0 ? <h1>No items available to display</h1> : data.map((item, index) => {
            return (
                <div>
                    <div key={index} className="panel panel-default">
                        <div className="panel-heading f-600" onClick={() => toggleContent(index)}>{item.title}  
                            <span style={{float: 'right'}}>{openIndex == index ? <strong>^</strong> : <strong>v</strong>}</span>
                        </div>
                        {openIndex == index && <div className="panel-body">{item.content}</div>}
                    </div>
                </div>
            )
        })}
        </div>
    </>)
}

export default MyAccordion;