/* Oregon trail */
function Traveler(name, hunger, home, sick){
    this.name= name;
    this.hunger=hunger;
    this.home= home;
    this.sick=sick;
    this.alive=true;
    this.hunt= function(){
        if(this.home.ammo==5){
            if(Math.rendom() <= 0.6){
                this.home.food ==this.home.food+200;
            }else{
                this.home.food== this.home.food +0;
                console.log('Nothing');
            }
            return true;
        }
    }
    this.eat=function(){
         if(this.sick==false){
             this.home.food = this.home.food -10;
             console.log('healthy');
         }else{
             this.home.food= this.home.food -20;
             this.hunger=this.hunger- 25;
         }
    }
    
    this.sideKicks=function(){
        return this.home.travelers.length -1;
    }
}

function Wagon(day, capacity, food, ammo){
    this.day= day;
    this.capacity = capacity;
    this.food= food;
    this.ammo= ammo ;
    this.travelers=[];
    this.join= function(traveler){
         this.travelers.push(traveler);
    }
    this.quarantine= function(){
        for(let i=0; i<travelers.length;i++){
            this.travelers[i].sick
        }
    }
    this.ready=function(){

    }
    this.next=function(){
       //wegon days increase bt 1.
       this.day=this.day+ 1;
       for(let i=0;i<this.travelers.length;i++){
           // Wagon hunger should increase by 10
           this.travelers[i].hunger=this.travelers[i].hunger + 10;
           
           // if hunger reaches than traveler is not alive.
           if(this.travelers[i].hunger>=100){
               this.travelers[i].alive=false;
           }
           if(this.travelers[i].sick==true){
               if(Math.rendom()<= 0.2){
                   this.travelers[i].sick=false;
               }
           }
           if(this.food >0 ){
               this.travelers[i].hunger= this.travelers[i].hunger -1;
           }
       }
      // console.log(this.travelers);
       console.log(this.travelers);
    }
}

let coach= new Wagon(1,5,500,3);
let passenger= new Traveler('mark',110,coach,false);
coach.join(passenger);
coach.next();

