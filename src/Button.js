import { useState } from "react";

function Button(){
    let [currentClick, setCurrentClick] = useState(0);
    return (
        <div>
            <button onClick={(event, value) => {
                currentClick++;
                setCurrentClick(currentClick);


            }}>Click me!</button>
            <h1>`You click {currentClick} time!`</h1>
        </div>
    )
}
export default Button