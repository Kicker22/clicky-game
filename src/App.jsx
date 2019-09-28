import React, {Component} from "react";
import Navbar from "./components/Navbar.jsx";
import Wrapper from "./components/Wrapper";
import CharCard from "./components/CharCard";
import characters from "./characters.json";
import Jumbotron from "./components/Jumbotron";



let correct = 0;
let score = 0;
let clickAlert = "Click on a character to increase your score, However be carful not to click the same image twice"


class App extends Component {

  state={
    characters,
    correct,
    score,
    clickAlert
  }

  setClicked = id =>{
    const matches = this.state.characters;
    const clickMatch = characters.filter(match => match.id === id)
    
    if(clickMatch[0].clicked){
      correct = 0
      clickAlert="that was wrong"

      for (let i = 0; i < characters.length; i++) {
        matches[i].clicked=false;

        
      }
      this.setState({clickAlert})
      this.setState({score})
      this.setState({correct})

    }else if(correct = 7 ){
      clickMatch[0].clicked=true;
      correct++;
      clickAlert='Keep going'


      matches.sort(function () {return 0.5 - Math.random()})
      this.setState({clickAlert})
      this.setState({score})
      this.setState({correct})
      

    }
  }


  render(){
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <h1 className="text-center mt-5" style={{ color: "red" }}>
          Welcome to Fazbears Pizzaria!
        </h1>
        <div className="container d-flex">
          {this.state.characters.map(characters => (
            <CharCard  setClicked={this.setClicked} key={characters.id} id={characters.id} image={characters.image} />
  
          ))}
        </div>
      </Wrapper>
    );
  }
}
    
  



export default App;
