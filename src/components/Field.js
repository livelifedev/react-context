import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === "english" ? "Name" : "Namishi";

        return (
            <div>
                <label>{text}</label>
                <div>
                    <input />
                </div>
            </div>
        );
    }
}

export default Field;