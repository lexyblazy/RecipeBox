import React, { Component } from "react";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.lastId,
      name: "",
      ingredients: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name) {
      return alert("Recipe must have a Name");
    }
    if (!this.state.ingredients) {
      return alert("Recipe must have ingredients");
    }
    const ingredients = this.state.ingredients.split(",");
    const id = this.state.id + 1;
    this.setState({ ingredients,id }, () => {
      console.log(this.state);
      this.props.addRecipe(this.state, () => {
        this.setState({
          id: this.props.lastId,
          name: "",
          ingredients: ""
        });
      });
    });
  }
  render() {
    return (
      <form
        className="modal"
        tabIndex="-1"
        role="dialog"
        onSubmit={this.handleSubmit}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add a Recipe</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">Recipe</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Recipe Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="ingredients">Ingredients</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="ingredients"
                  placeholder="Enter ingredients,seperated,commas"
                  className="form-control"
                  value={this.state.ingredients}
                />
                 
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Add Recipe
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default ModalForm;
