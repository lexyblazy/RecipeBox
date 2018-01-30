import React, { Component } from "react";
import Recipe from "./recipe";
import Modal from "./modal";
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
      ],
      lastRecipeId: 2
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  addRecipe(recipe,callback){
    const recipes = [...this.state.recipes,recipe];
    const next = this.state.lastRecipeId+1;
    this.setState({recipes,lastRecipeId:next},()=>{
      callback();
    })
  }
  deleteRecipe(id) {
    const recipes = this.state.recipes.filter(r => {
      return r.id !== id;
    });
    this.setState({ recipes });
  }
  render() {
    const recipes = this.state.recipes.map((r,index) => {
      return (
        <Recipe
          key={index}
          {...r}
          deleteRecipe={this.deleteRecipe}
          
        />
      );
    });
    return (
      <div className="container">
        <Modal lastId={this.state.lastRecipeId} addRecipe={this.addRecipe}/>
        <div id="accordion">{recipes}</div>
        <br />
        <button
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target=".modal"
        >
          Add Recipe
        </button>
      </div>
    );
  }
}

export default App;
