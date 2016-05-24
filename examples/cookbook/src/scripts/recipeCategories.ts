//TODO (GENERICS EXERCISE)
//1. Study how generics are used in this class.
//2. If you're in VS Code, right-click on the RecipeCategories class and select "Find all References".
//3. Take a moment to examine how the RecipeCategories generic class is used.
class RecipeCategories<T> {
    items: T[] = [];
}