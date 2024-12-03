{
  // Make a class name MusicalInstuments
  class MusicalInstuments {
    name: string;

    // constructor
    constructor(name: string) {
      this.name = name;
    }

    // Method to play
    play() {
      console.log(`Playing the ${this.name}`);
    }
  }

  // Example of Inheritance
  // Build a child class of MusicalInstuments
  class Guitar extends MusicalInstuments {
    constructor() {
      // Send the constructor data to the parent class
      super("Guitar");
    }

    tune() {
      console.log(`Tuning the ${this.name}`);
    }
  }

  class Piano extends MusicalInstuments{
    constructor() {
      super("Piano");
    }

    openLid(){
        console.log(`Opening the lid..... ${this.name}`);
    }
  }
  const guitarist = new Guitar();
  console.log(guitarist.name)
  guitarist.play();

//   Abstraction


}
