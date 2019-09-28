import React from "react";
import Navbar from "./components/Navbar.jsx";
import Wrapper from "./components/Wrapper";
import CharCard from "./components/CharCard";
import characters from "./characters.json";
import Jumbotron from "./components/Jumbotron";



function App(){
  return (
    <Wrapper>
      <Navbar />
      <Jumbotron />
      <h1 className="text-center mt-5" style={{ color: "red" }}>
        Welcome to Fazbears Pizzaria!
      </h1>
      <div className="container d-flex">
        {characters.map(Characters => (
          <CharCard key={Characters.id} id={Characters.id} image={Characters.image} />

        ))}
      </div>
    </Wrapper>
  );
}
  



export default App;
