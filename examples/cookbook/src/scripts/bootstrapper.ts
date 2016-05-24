class Bootstrapper {
 
  renderer: Renderer;
  
  //1. Change the type to use IRecipeCategory instead of RecipeCategory.
  recipeCategories: RecipeCategories<IRecipeCategory>;

  loadRecipes() {
      var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      try {
          let category = this.recipeCategories.items
              //Find selected item by name
              .filter(item => item.name === el.value)
              //return the item
              .reduce(item => {
                //TODO (CONSTRUCTORS EXERCISE)
                //Change the RecipeCategory code below so that the property values are
                //passed into the constructor rather than set individually.
                var rc = new RecipeCategory({
                  name: el.value,
                  foodGroups: item.foodGroups,
                  description: item.description,
                  examples: item.examples
                });
                return rc;                
              });
          this.renderer.renderCategory(category);
      }
      catch (ex) { alert(ex.message) }
  }
  
  init() {
      let categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      categoriesSelect.onchange = () => this.loadRecipes();

      let recipeLoader = new RecipeLoader("/json/recipeTypes.json");
      
      recipeLoader.load().then((recipeData: IRecipeData) => {
          this.recipeCategories = recipeData.recipeCategories;
          this.renderer = new Renderer(recipeData.recipeCategoriesSummary);
      });
  }
  
}


window.onload = () => { 
  var bootstrapper = new Bootstrapper();
  bootstrapper.init();
};

  




