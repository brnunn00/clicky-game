import React, { Component } from "react";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
// import Header from "../components/Header";
import images from "../images.json";
import Navbar from "../components/Navbar"
import "./style.css";
import "./animate.css";

import { Col, Row, CardContainer,Container } from "../components/Grid";
// import { List, Row, Container } from "../components/Grid";
class Game extends Component {
    state = {
        clickedCards: [],
        images,
        imageIds: [],
        bestScore: 0,
        currentScore: 0,
        gameMessage: "Click an image to begin",
        gameMessageClass:""

    };

    componentDidMount() {
        let arr = this.shuffleMe(this.state.images);
        this.setState({images:arr})
    }

    shuffleMe = anything => {
        anything.sort(function(a, b) {  
            return 0.5 - Math.random()
        })
return anything;
    }

    checkGuess = guessId => {
      let clickArray = this.state.clickedCards;
      let bestScore = this.state.bestScore;
      let newScore = this.state.currentScore;
      let imageArr = this.state.images;
      newScore++;
      if (newScore > bestScore){
          bestScore = newScore;
      }
      if (clickArray.indexOf(guessId) > -1){
          
          this.gameOver();
      } else if(bestScore == imageArr.length ){
this.youWin();
      } else {
          clickArray.push(guessId);
         
          let newArr = this.shuffleMe(this.state.images);
          this.setState({gameMessageClass: "correct",bestScore: bestScore, currentScore:newScore, clickedCards: clickArray, images:newArr
        , gameMessage: "Correct! Keep going but don't pick an image you've already picked!"})
      }
    }

    gameOver = () => {
        let newArr = this.shuffleMe(this.state.images);

        this.setState({gameMessageClass: "wrong",currentScore:0,clickedCards:[], images:newArr, gameMessage: "Aww you lost. Game Over! Keep going until you get all 12, unless you're a chicken"})
    }
    youWin = () => {
        let newArr = this.shuffleMe(this.state.images);
        this.setState({currentScore:0,clickedCards:[], images:newArr, gameMessage: "Good job you won. Now can you do it again without cheating?"})
    }
    render() {
        return (
          <div>
                <Navbar>
                    
                    <li className="ml-auto">Current Score: {this.state.currentScore} |
                  Best Score: {this.state.bestScore} </li>
                </Navbar>
                <Jumbotron message={this.state.gameMessage} classState ={this.state.gameMessageClass}/>
                <Container>
                {/* <Col size="md-12"> 
            <CardContainer> */}
                {this.state.images.map(image => (
                    <div class="animate fadeInLeft">
                    <Card
                        checkGuess={this.checkGuess}
                        id={image.id}
                        key={image.id}
                        name={image.name}
                        image={image.image}
                    />
                    </div>
                ))}
            {/* </CardContainer>
            </Col> */}
            </Container>
            </div>
        )
    }
}

export default Game;