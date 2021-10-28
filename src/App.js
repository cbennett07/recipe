import React from 'react';

class App extends React.Component {
    state = {
        isAddRecipeFormDisplayed: false,
        recipes: [],
        newRecipeName: "",
        newRecipeInstructions: ""
    }

    toggleAddRecipeForm = () => {
        this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
    }

    submitRecipe = (event) => {
        event.preventDefault();
        this.setState({
            recipes: [...this.state.recipes, {name: this.state.newRecipeName, instructions: this.state.newRecipeInstructions}],
            newRecipeName: "",
            newRecipeInstructions: "",
        })
    }

    handleRecipeNameChange = (event) => {
        const value = event.target.value;
        this.setState({newRecipeName: value});
}
    handleRecipeInstructionsChange = (event) => {
        const value = event.target.value;

        this.setState({newRecipeInstructions: value});
    }

    render(){
    const addNewRecipeForm = (
        <form id="recipe-form" onSubmit={(e)=>{this.submitRecipe(e)}}>
            <label htmlFor="newRecipeName">Recipe name: </label>
            <input type="text" name="newRecipeName"
                   id="newRecipeName"
                   onChange={this.handleRecipeNameChange}
                   value={this.state.newRecipeName}
            />
            <label htmlFor="newRecipeInstructions">Instructions:</label>
            <textarea name="newRecipeInstructions"
                      id="newRecipeInstructions"
                      placeholder="write recipe instructions here..."
                      onChange={this.handleRecipeInstructionsChange}
                      value={this.state.newRecipeInstructions}
            />
            <input type="submit" />
        </form>
    )
        const recipeList = this.state.recipes.map(recipe => {
            return <li>{recipe.name}</li>;
        })

        return (
            <div className="App">
                <h1 className="App-header">My Recipes</h1>
                {
                    this.state.isAddRecipeFormDisplayed
                        ? addNewRecipeForm
                        : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
                }
                {
                    this.state.recipes.length > 0 ?
                        <ul>
                            <li>{recipeList}</li>
                        </ul> :
                        <p>There are no recipes to list.</p>
                }
            </div>
        )
    }
}

export default App;
