import React, { Component } from 'react';
import "./css/StartPage.css";

class StartPage extends Component {
    state = {  } 
    constructor(props) {
        super(props)
    }

    render() { 
        return (
        <React.Fragment>
            <h1 className='gameTitle'>PONG</h1>
            <h2 className="selectGameModeText">Válassz játékmódot!</h2>
            <div className="gamemodesWrapper">
                <button id="TwoPlayerBtn" onClick= { () => this.props.startGameHandler("TwoPlayer")}>2 Játékos</button>
                <button id="EasyBtn">Könnyű</button>
                <button id="MediumBtn">Közepes</button>
                <button id="HardBtn">Nehéz</button>
            </div>
        </React.Fragment>);
    }
}
 
export default StartPage;
