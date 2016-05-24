//TODO (INTERFACES EXERCISE)
//1. Implement the IBaseRecipeCategory interface
class BaseRecipeCategory implements IBaseRecipeCategory {
  
    //TODO (Properties exercise): Create "_name" (string type) and "_foodGroups" (FoodGroup[] type) member variables/fields.
    //Assign the "_foodGroups" field a value of [];
    // _name: string;
    // _foodGroups: FoodGroup[] = [];
    
    
    //TODO (Properties exercise): Create get and set blocks for "name" (string type) and "foodGroups" (FoodGroup[] type) properties.
    //The get block should return _name while the set block should assign the value to _name.
    
    // get name() {
    //   return this._name;
    // }
    
    // set name(value: string) {
    //   this._name = value;
    // }
    
    // get foodGroups() {
    //   return this._foodGroups;
    // }
    
    // set foodGroups(value: FoodGroup[]) {
    //   this._foodGroups = value;
    // }
    
    
    /*
      TODO (Constructors Exercise) Perform the following steps:
      1. Delete the existing variables/fields and property get/set blocks currently in the class.
         You'll be replacing these properties with a simpler syntax and using a constructor to assign values to them.
         Note that you can remove the TODO (Properties Exercise) comments associated with the code if you'd like.
      2. Add the following properties following the "propertyName: type;" coding style. 
         You DO NOT need to use get/set blocks for these properties:
         a. Add a "name" property that is a string type
         b. Add a "foodGroups" property that is of type FoodGroup[] and assign it a value of [].
      3. Create a new constructor that accepts "name" and "foodGroups" as parameters.
      4. Within the constructor, assign the parameter values to the "name" and "foodGroups" properties respectively.
    */
    
    name: string;
    foodGroups: FoodGroup[];
    
    constructor(name: string, foodGroups: FoodGroup[]) {
      this.name = name;
      this.foodGroups = foodGroups;
    }
    
    
} 