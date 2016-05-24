//TODO (CONSTRUCTORS EXERCISE)
//2. Delete the name and foodGroups properties from the RecipeCategory class.
//1. Add code so make RecipeCategory inherit from BaseRecipeCategory

//TODO (INTERFACES EXERCISE)
//1. Implement the IRecipeCategory interface
class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
    description: string;
    examples: IExample[];
    //name: string;
    //foodGroups: FoodGroup[];

    /*
      TODO (Constructors exercise)
      2. Create a constructor that accepts a recipeCategory parameter of type IRecipeCategory
      3. Perform the following tasks inside of the constructor:
         a. Pass the "name" and "foodGroups"" values from the recipeCategory constructor
            parameter to the BaseRecipeCategory class (the base class or "super") by calling super().      
         b. Assign the recipeCategory parameter's description property to the description property in this class.
         c. Assign the recipeCategory parameter's examples property to the examples property in this class.
    
    */

    //TODO (INTERFACES EXERCISE)
    //1. Change the parameter type to IRecipeCategory
    constructor(recipeCategory: RecipeCategory) {
      super(recipeCategory.name, recipeCategory.foodGroups);
      this.description = recipeCategory.description;
      this.examples = recipeCategory.examples;
    }


} 