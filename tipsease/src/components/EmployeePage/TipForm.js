import React from "react";

function TipForm(props) {
    return (
        <div>
            <label for="customTip">Custom Tip:</label>
            <input 
            type="number"
            id="customTip"
            />
            <button>$5</button>
            <button>$10</button>
            <button>$15</button>
            <button>Send Tip</button>
        </div>
    )
}

export default TipForm