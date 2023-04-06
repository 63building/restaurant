window.onload = () => {

}

class ModificationApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ModificationApi();
        }
        return this.#instance;
    }


}

class ReservationModificationService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new updateService();
        }
        return this.#instance;
    }

    
}

class ComponentEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new updateService();
        }
        return this.#instance;
    }
}