import React from "react";

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
                <p>{this.state.language}</p>
            </div>
        );
    }
}

export default App;