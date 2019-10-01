import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper";
import CharCard from "./components/CharCard";
import characters from "./characters.json";
import "./css/app.css"



let correct = 0;
let score = 0;
let clickAlert = "Click on a character to increase your score, However be carful not to click the same image twice"


class App extends Component {

  state = {
    characters,
    correct,
    score,
    clickAlert
  };

  setClicked = id => {
    const characters = this.state.characters;
    const clickMatch = characters.filter(match => match.id === id);

    if (clickMatch[0].clicked) {
      correct = 0;
      clickAlert = "that was wrong";

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }


      this.setState({ clickAlert })
      this.setState({ correct })
      this.setState({ characters })

    } else if (correct < 11) {
      clickMatch[0].clicked = true;

      correct++;

      clickAlert = 'Keep going';

      if (correct > score) {
        score = correct;
        this.setState({ score });
      };

      characters.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ characters })
      this.setState({ correct })
      this.setState({ clickAlert })


    } else {
      clickMatch[0].clicked = true;

      correct = 0;

      clickAlert = 'you winner'

      score = 8;

      this.setState({ score })

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }

      characters.sort(function (a, b) { return 0.5 - Math.random() })

      this.setState({ characters })
      this.setState({ correct })
      this.setState({ clickAlert })


    }


  };


  render() {
    return (
      <Wrapper>
        <Navbar />

        <div className="container jumbo-container">
          <div className="jumbotron">
            <ul>
              <h1>The rules</h1>
              <li>Click on a character</li>
              <li>You may only click each character one time</li>
              <li>If you click a previous character you will restart</li>
              <li>The goal is to click on every character, This is a memory game.</li>
            </ul>
            <div className="container">
              <h1>score: {this.state.score}</h1>
              <h1>Correct: {this.state.correct}</h1>

            </div>
          </div>

        </div>

        
        <div className="container content-container">
          <h1 className="text-center mt-5" style={{ color: "red" }}>
            Welcome to Fazbears Pizzaria!
        </h1>
          <h3 className="text-center" style={{ color: "red" }}>{this.state.clickAlert}</h3>
          <div className="container">
            <div className="container images-container">
              {this.state.characters.map(match => (
                <CharCard setClicked={this.setClicked} key={match.id} id={match.id} image={match.image} />
              ))}
            </div>
          </div>
        </div>


      </Wrapper>



    );
  }
}





export default App;
