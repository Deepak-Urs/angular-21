import { useState } from "react";

const ConditionalRender = () => {
    const [isDivVisible, setIsDivVisible] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [text1, setText1] = useState<string>("");
    const [text2, setText2] = useState<string>("");

    const changeIsDivVisble = (divState: boolean) => {
        setIsDivVisible(divState);
    }
    
    const changeCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const changeText1 = (event: any) => {
        setText1(event.target.value);
    }
    const changeText2 = (event: any) => {
        setText2(event.target.value);
    }


    return (<div>
        <h1>ConditionalRender</h1>
        <div className="row">
            {/* scenario-1 */}
            {isDivVisible && <div className="col-2">
                <div className="bg-danger p-4">Hello</div>
            </div>}

            {/* scenario-2 */}
            {isChecked && <div className="col-2">
                <div className="bg-warning p-4">Hola</div>
            </div>}

            {/* scenario-3 */}
            
            {(isChecked && text1 === text2 && text1 !== '' && text2 !== '') && <div className="col-2">
                <div className="bg-success p-4">Hola</div>
            </div>}

        </div>
        <hr/>
        <div className="row">
            <div className="col-4 text-center">
                <button className="btn btn-success" onClick={() => changeIsDivVisble(true)}>Show</button>

                <button className="btn btn-danger" onClick={() => changeIsDivVisble(false)}>Hide</button>

                <div className="col-2">
                    <input type="checkbox" onChange={() => changeCheckbox()} />
                </div>

                <div className="col-2">
                    <input type="text" placeholder="1" value={text1} onChange={(e) => changeText1(e)} />
                    <input type="text" placeholder="2" value={text2} onChange={(e) => changeText2(e)} />
                </div>
            </div>
        </div>
    </div>);
}

export default ConditionalRender;