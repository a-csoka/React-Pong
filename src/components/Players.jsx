import React, { Component} from 'react';
import "./css/Players.css";

class Players extends Component {
    state = { }
    
    constructor(props) {
        super(props);
        this.state = {
            OneY: 44,
            TwoY: 44,

            "KeyW": false,
            "KeyS": false,
            "ShiftLeft": false,

            "ArrowUp": false,
            "ArrowDown": false,
            "ShiftRight": false,
        }
    }   

    componentDidMount() {
        document.addEventListener('keyup', this.keyUpHandler); 
        document.addEventListener('keydown', this.keyDownHandler); 

        this.movementCheckOne = (time) => {
            if(this.state["KeyW"]) {
                if(this.state.OneY-1 >= 1) {
                    this.setState(() => ({ OneY: this.state.OneY-1 }));
                }   
            }else if(this.state["KeyS"]) {
                if(this.state.OneY+1+12 <= 99) {
                    this.setState(() => ({ OneY: this.state.OneY+1 }));
                }
            }
            var nextTime = 35
            /*
            if(this.state["ShiftLeft"]) {
                nextTime = 15
            }
            */

            setTimeout(() => {
            this.movementCheckOne(nextTime)
            }, time)
        }
        this.movementCheckOne(35)

        this.movementCheckTwo = (time) => {
            if(this.state["ArrowUp"]) {
                if(this.state.TwoY-1 >= 1) {
                    this.setState(() => ({ TwoY: this.state.TwoY-1 }));
                }
            }else if(this.state["ArrowDown"]) {
                if(this.state.TwoY+1+12 <= 99) {
                    this.setState(() => ({ TwoY: this.state.TwoY+1 }));
                }
            }
            var nextTime = 35
            /*
            if(this.state["ShiftRight"]) {
                nextTime = 15
            }
            */

            setTimeout(() => {          
            this.movementCheckTwo(nextTime)
            }, time)
        }
        this.movementCheckTwo(35)


    }


    keyUpHandler = (key) => {
        if(this.state[key.code] == true) {
            key.preventDefault()
            this.state[key.code] = false
        }
    }

    keyDownHandler = (key) => { 
        if(this.state[key.code] == false) {
            key.preventDefault()
            this.state[key.code] = true
        }
    }

    render() { 
        return (
            <React.Fragment>
            <div className="playerAvatar rounded-pill" id="playerOne" style={{top: this.state.OneY+"vh"}}/>
            <div className="playerAvatar rounded-pill" id="playerTwo" style={{top: this.state.TwoY+"vh"}}/>
            </React.Fragment>

        );
    }
}
 
export default Players;