//TODO (INTERFACES EXERCISE)
//1. Create a new interface named IBaseRecipeCategory.
//2. Add a name property (type string) into the interface.
//3. Add a foodGroups property (type FoodGroup[]) into the interface.
interface IBaseRecipeCategory {
  name: string;
  foodGroups: FoodGroup[];
}


//TODO (INTERFACES EXERCISE)
//1. Create a new interface named IRecipeCategory that extends IBaseRecipeCategory
//2. Add a description property (type string) into the interface.
//3. Add a examples property (type IExample[]) into the interface.
interface IRecipeCategory extends IBaseRecipeCategory {
  description: string;
  examples: IExample[];
}


interface IFoodGroup {
    name: string;
}

interface IExample {
    name: string;
    ingredients: Ingredient[];
    prepTime: string; 
}

interface IIngredient {
    name: string;
}

interface IRecipeData {
  recipeCategories?: RecipeCategories<RecipeCategory>;
  recipeCategoriesSummary?: RecipeCategories<IRecipeCategorySummary>;
}

//TODO
//Create an interface named IRecipeCategorySummary 
//that has the following members
//text - string
//title - string

interface IRecipeCategorySummary {
    text: string;
    title: string;
}