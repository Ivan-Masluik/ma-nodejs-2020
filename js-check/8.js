class Planet {
    constructor(name, diameter) {
     this.name = name;
     this.diameter = diameter;
     this.volume = 0;
       }
   
    getVolume() {
     let radius = this.diameter / 2;
     this.volume = 4/3 * Math.PI * Math.pow(radius, 3);
    }
   
    getInfo() {
     console.log(`Planet name: ${this.name}. Planet volume: ${this.volume}`);
       }
   }
   
   class Earth extends Planet {}
   
   let earth = new Earth('Земля', 50);
   
   earth.getVolume();
   earth.getInfo();