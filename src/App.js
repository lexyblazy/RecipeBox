import React, { Component } from "react";
import Recipe from "./recipe";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          name: "Coconut",
          ingredients: ["water", "coconut", "oil", "sugar"]
        },
        {
          id: 2,
          name: "Fried Sphaghetti",
          ingredients: ["Spaghetti", "cabbage", "oil", "seasoning"]
        },
        {
          id: 3,
          name: "Ofada Rice and Stew",
          ingredients: ["Rice", "Pepper", "oil", "seasoning","Ofada leaves"]
        },
        {
          id: 4,
          name: "Donuts",
          ingredients: ["Flour", "water", "oil","sugar", "seasoning"]
        }
      ]
    };
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  deleteRecipe(id){
    const recipes = this.state.recipes.filter(r=>{
      return r.id !== id;
    });
    this.setState({recipes});
  }
  render() {
    const recipes = this.state.recipes.map(r => {
      return <Recipe key={r.id} {...r} deleteRecipe={this.deleteRecipe}/>;
    });
    return (
      <div className="container">
        <div id="accordion">{recipes}</div>
        <button className='btn btn-primary btn-lg'>Add Recipe</button>
      </div>
    );
  }
}

export default App;
