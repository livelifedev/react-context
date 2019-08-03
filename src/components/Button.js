//example of using consumer to access data
import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    renderSubmit(value) {
        return value === "english" ? "Submit" : "Submishi";
    }

    render() {
        return (
            <button>
                {/* function is passed as child to consumer component, which is auto-invoked
                the value of the function is gotten from the provider */}
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;