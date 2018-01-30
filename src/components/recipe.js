import React from "react";

const Recipe = props => {
  const { name, id, deleteRecipe } = props;
  const ingredients = props.ingredients.map((ingredient,index) => {
    return <li key={index} className="list-group-item">{ingredient}</li>;
  });

  return (
    <div className="card">
      <div className="card-header" id={`heading${id}`}>
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target={`#collapse${id}`}
            aria-expanded="true"
            aria-controls={`collapse${id}`}
          >
            {name}
          </button>
        </h5>
      </div>

      <div
        id={`collapse${id}`}
        className="collapse"
        aria-labelledby={`heading${id}`}
        data-parent="#accordion"
      >
        <div className="card-body">
          <h5 className="text-center">Ingredients</h5>
          <ul className="list-group">{ingredients}</ul>
          <br/>
          <div>
            <button className="btn btn-danger" onClick={()=>deleteRecipe(id)}>Delete</button> <span>&nbsp;</span>
            <button className="btn btn-secondary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
