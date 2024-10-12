class Suelo{
    constructor(x,y,w,h){
        var opciones ={
            isStatic:true
        }
        this.cuerpo = Bodies.rectangle(x,y,w,h,opciones);
        this.w = w;
        this.h = h;
        World.add(world, this.cuerpo);
    }

    show() {
        var posi = this.cuerpo.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(posi.x,posi.y, this.w, this.h);
        pop();
      }
}