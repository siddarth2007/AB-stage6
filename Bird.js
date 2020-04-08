class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.way=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x >10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
      this.way.push(position);
    }

    for(var i=0; i<this.way.length; i++){
      image(this.smokeimage,this.way[i][0], this.way[i][1]);
    }
  }
}
