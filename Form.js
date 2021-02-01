class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Remake of loneliness");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(900,400);
      this.button.position(900,500);
      this.reset.position(displayWidth-10,displayHeight);
  
      this.button.mousePressed(()=>{
        gameState=1;
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello, welcome to this remake of loneliness")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
     
      };
  
    }
  
  