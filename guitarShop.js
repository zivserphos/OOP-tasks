class ClassicGuitar{
    #id
    constructor(_manufacture , _brand , _price , _id, _nubmerOfstring = 6){
        this.manufacture = _manufacture;
        this.guitarBrand = _brand;
        this.guitarPrice = _price;
        this.guitarUsed = false;
        this.#id = _id;
        this.nubmerOfstring = _nubmerOfstring
     }
    play() {
        this.price *= 0.9; 
        this.used = true;
        console.log("🎶🎶🎶")
    }

    get brand() {
        return this.guitarBrand;
    }
    get manufactureYear(){
        return this.manufacture;
    }

    get price(){
        return this.price
    }

    set changePrice(val) {
        this.guitarPrice = val
    }

    get id() {
        return this.#id
    }
    
    static detectSound(sound) {
        if (sound === "🎸") {
            return "Electric Guitar";
        }
        if (sound === "🔊") {
            return "Bass Guitar"
        }
        return "INVALID INPUT"
    }
}

class ElectricGuitar extends ClassicGuitar {
    constructor(_manufactureYear, _brand , _price , _id , _longNeck , _nubmerOfstring) {
      super(_manufactureYear , _brand , _price , _nubmerOfstring , _id);
      this.longNeck = _longNeck;
    }

    play() {
        console.log("🎸🎸🎸")
    }
}

class BassGuitar extends ClassicGuitar {
    constructor(_manufactureYear, _brand , _price , _id) {
        super(_manufactureYear , _brand , _price , _id);
        this.nubmerOfstring = 4;
    }
    playSolo() {
        const characters = ["💥", "🤘", "🎵", "📢", "💢", "🕺"]
        let string = ""
        for (let i=0; i<6; i++) {
            string+= characters.splice(Math.round(Math.random() *(5-i)) , 1)
        }
        return string;
    }
    play() {
        console.log("🔊🔊🔊")
    }
}