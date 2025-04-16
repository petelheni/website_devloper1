import React from "react";

class Stateex extends React.Component {
    constructor() {
        super()
        this.state = { language: "Amgular" }
    }
    handleEvent = () => {
        this.state({ language: "REact" })
    }

    render() {
        return (
            <>
                <buttion onclick={this.handleEvent}>Click hrar</buttion>
                <p>{this.state.language}</p>
            </>
        )
    }
}
export default Stateex