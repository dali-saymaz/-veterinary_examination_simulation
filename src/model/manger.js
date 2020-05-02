class Manager {
    animalList = [];
    doctorList = [];
    stoptointerval = null;
    rapeutic=[];
    constructor() {
        this.createAnimal();
        this.arrayDoctor();
    }

    arrayDoctor() {
        this.doctorList = [
            new Doktor("Yasemin", "Karga"),
            new Doktor("Cabbar", "Kedi"),
            new Doktor("Niyazigul", "Kedi"),
            new Doktor("Eleni", "Hamsi"),
        ];
    }
    createAnimal() {
        for (let index = 0; index < 40; index++) {
            this.animalList.push(Animal.animalGenerate())
        }
    }
    startS() {

        this.stoptointerval = setInterval(() => {
            this.doctorFilter()
            console.log(this.rapeutic)
        }, 1000);

        setTimeout(() => {
            clearInterval(this.stoptointerval)
        }, 18000);
    }


    animalFilter(pDoctor) {
        this.animalList.find((panimal) => {

            if ((pDoctor.status === true) && (pDoctor.treatedAnimal === panimal.animalType)) {
                pDoctor.status = !pDoctor.status;
                if (panimal.animalType == "Karga") {
                    this.raven(pDoctor, panimal);
                }
                if (panimal.animalType == "Kedi") {
                    this.cats(pDoctor, panimal);
                }
                if (panimal.animalType == "Hamsi") {
                    this.fish(pDoctor, panimal);
                }
            }
        })
    }
    cats(pDoctor, pAnimals) {
        setTimeout(() => {
            let status = !pDoctor.status;
            pDoctor.status = status;
            this.rapeutic.push({DoctorName:pDoctor.name,AnimalName:pAnimals.animalType,Price:100})
            console.log(this.doctorList)
        }, 7000);
    }
    fish(pDoctor, pAnimals) {
        setTimeout(() => {
            let status = !pDoctor.status;
            pDoctor.status = status;
            this.rapeutic.push({DoctorName:pDoctor.name,AnimalName:pAnimals.animalType,Price:100})
            console.log(this.doctorList)
        }, 3000);
    }
    raven(pDoctor, pAnimals) {
        setTimeout(() => {
            let status = !pDoctor.status;
            pDoctor.status = status;
            this.rapeutic.push({DoctorName:pDoctor.name,AnimalName:pAnimals.animalType,Price:100})
            console.log(this.doctorList)
        }, 5000);
    }
    
    doctorFilter() {
        this.doctorList.map((doctor) => {
            this.animalFilter(doctor)
        })
    }

}