//example of using consumer to access data
import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    renderSubmit(value) {
        return value === "english" ? "Submit" : "Submishi";
    }

    renderButton(color) {
        return (
            <button className={`button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
        /* function is passed as child to consumer component, which is auto-invoked
        the value of the function is gotten from the provider */
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;