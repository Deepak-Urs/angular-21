function DataEventBinding() {
    const courseName = 'React';
    const stateName = 'mh';
    const div1ClassName = "primary";
    const myCss = {
        'background-color': 'green',
        'width': '200px',
        'height': '200px'
    }
    const showWelcomeTest = () => {
        alert("Welcome to react!")
    }

    const onStateChangeSelect = () => {
        alert(`on State changes seen, you've chosen ${stateName}`);
    }

    const onMouseEnter = () => {
        console.log("Mose has ENTERED the area");
        
    }

    const onMouseLeave = () => {
        console.log("Mose has LEFT the area");
        
    }

    return <div>
        <p>CourseName - {courseName}</p>
        <span> {courseName }</span>
        <input type="text" value={courseName} />
        <br />

        <select value={stateName} onChange={onStateChangeSelect}>
            <option value="goa">Goa</option>
            <option value="punjab">Punjab</option>
            <option value="mh">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
        </select>

        <div className={div1ClassName}>
            Div-11
        </div>
        <br/><br/>

        <div style={myCss} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></div>

        <button onClick={showWelcomeTest}>Show Welcome!</button>
    </div>
}

export default DataEventBinding;