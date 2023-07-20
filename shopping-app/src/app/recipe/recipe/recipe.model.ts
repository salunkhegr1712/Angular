// this will blueprint for our recipe 
export class Recipe{

      public name:String;
      public description:String;
      public img:String;

      constructor(name:String,description:String,img:String) {
            this.name=name;this.description=description;this.img=img
      }
};