//TODO (INTERFACES EXERCISE)
//1. Add code to make the Example class implement IExample
class Example implements IExample {
    name: string;
    ingredients: Ingredient[] = [];
    prepTime: string; 

    constructor(example: IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}


