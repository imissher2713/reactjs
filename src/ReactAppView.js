import { useState } from "react";

function ReactAppView() {
    const [yourName, setName] = useState("");
    return (
        <div>
            <label>Name: </label>
            <input type="text" onChange = {(event) => {
                setName(event.target.value);

            }} />
            <h1>Hello {yourName}!</h1>
        </div>
    );
}
export default ReactAppView