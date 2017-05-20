class RecipeLoader {
  
    constructor(public url: string) {}

    //TODO (GENERICS EXERCISE)
    //1. Change the load() function's return type to use the JQueryPromise<IRecipeData> generic
    //   This will provide the caller with much better code help as they work with the return value.
    //2. If you're in VS Code, right-click on JQueryPromise and select "Peek Definition" from the menu
    //3. Take a moment to explore how the JQueryPromise interface uses generics
    load() : JQueryPromise<IRecipeData> {
        return $.getJSON(this.url).then((data: any) => {
            var recipeData = this.mapData(data);      
            return recipeData; 
        });
    }

    mapData(data: any) : IRecipeData {
        if (data) {
            let categories: any[] = data.recipeCategories;
            
            //TODO (INTERFACES EXERCISE)
            //Pass IRecipeCategory as the type to the generic below
            var recipeCategories = new RecipeCategories<IRecipeCategory>();

            //TODO (INTERFACES EXERCISE)
            //Pass IRecipeCategorySummary as the type to the generic below
            var recipeCategoriesSummary = new RecipeCategories<IRecipeCategorySummary>();
            
            categories.forEach((category: any) => {
                //TODO (CONSTRUCTORS EXERCISE)
                //Change the RecipeCategory code below so that the property values are
                //passed into the constructor rather than set individually.
                let recipeCategory = new RecipeCategory({
                   name: category.title,
                   foodGroups: this.getFoodGroups(category),
                   description: category.details,
                   examples: this.getExamples(category)
                });

                
                recipeCategories.items.push(recipeCategory);

                let recipeCategorySummary = new RecipeCategorySummary({
                    text: category.title,
                    title: category.details
                });
                recipeCategoriesSummary.items.push(recipeCategorySummary);
            });
                      
            return {
               recipeCategories: recipeCategories,
               recipeCategoriesSummary: recipeCategoriesSummary
            };
        }
        else {
            return null;
        }
    }

    getFoodGroups(category: any) : FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup: any) => {
            //TODO (Constructors exercise)
            //Change the FoodGroup code below so that the property value is
            //passed into the constructor rather than set individually.
            var group = new FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category: any) : IExample[] {
        return category.examples.map((example: any) => { 
            return new Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example: any): Ingredient[] {
        return example.ingredients.map((value: any) => {
            return new Ingredient(value);
        });
    }
} 