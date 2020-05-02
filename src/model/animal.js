class Animal{
    owner=Faker.generatePersonName();
    Age=Random.generateRandomNumber(1, 20);
    Type=["","Kedi","Hamsi","Karga"];
    constructor(){
        this.animalType=this.Type[Random.generateRandomNumber(0, 4)]
    }
    static animalGenerate(){
        let animalName=this.animalType;
        return new Animal(animalName)
    }
}
