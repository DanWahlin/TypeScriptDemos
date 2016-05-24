class FoodGroup implements IFoodGroup {
    
    //TODO (Properties Exercise): Create a private "_name" member variable/field that is a string type
    //Example: private _myVariable: string;
    //_name: string;
    
    //TODO (Properties Exercise): Create a get and set block for a "name" property that is a string type.
    //The get block should return _name while the set block should assign the value to _name.
    // get name() {
    //   return this._name;
    // }
    
    // set name(value: string) {
    //   this._name = value;
    // }
    
    
    /*
      TODO (Constructors Exercise) Perform the following steps:
      1. Delete the existing field and property get/set blocks currently in the class.
         You'll be replacing this property with a simpler syntax and using a constructor to assign a value to it.
         Note that you can remove the TODO (Properties Exercise) comments in the code if you'd like.
      2. Add a "name" property that is a string type following the "propertyName: type;" coding style. 
      3. Create a new constructor that accepts "name" as a parameter (string type).
      4. Within the constructor, assign the parameter value to the "name" property.
    */
    
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }

} 