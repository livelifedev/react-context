import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
    state = { language: "english" };

    onLanguageChange = language => {
        this.setState({ language });
    };

    render() {
        return (
            <div>
                <div>
                    <div>Select a language: </div>
                    <button onClick={() => this.onLanguageChange("english")}>English</button>
                    <button onClick={() => this.onLanguageChange("japanese")}>Japanese</button>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;