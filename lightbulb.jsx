import {useState} from "react";
export const Lightbulb = () => {
    const [isOn, setOn] = useState(false);
    const toggleLight = () => {
        setOn(!isOn);
        // Removed unnecessary line causing error
    };

    return (
        <div>
            <button onClick={toggleLight}>
                {isOn ? "Turn Off" : "Turn On"}
            </button>
        </div>
    );
}

export default Lightbulb;