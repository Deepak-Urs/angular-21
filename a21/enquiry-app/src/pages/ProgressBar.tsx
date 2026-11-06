import { useEffect, useState } from "react";

const PBar = ({progress}) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    useEffect(() => {
        setTimeout(() => setAnimatedProgress(progress), 500);
    }, [progress])
    return (
        <div className="outer">
            <div className="inner" 
                style={{
                    //width: `${progress}%`, 
                    color: animatedProgress < 5 ? 'black' : 'white',
                    transform: `translateX(${animatedProgress-100}%)`
                }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                {progress}%
            </div>
        </div>
    )
}

const ProgressBar = () => {
    const bars = [1,10,20,40,80,100];
  return (
    <div className="App">
      <h1> ProgressBar </h1>

        {bars.map((item, index) => <PBar key={index} progress={item} />)}
      
    </div>
  )
}

export default ProgressBar
