class Car {
    constructor(_creator, _functions, _year, _colour, _extras) {
        this.creator = _creator;
        this.functions = _functions;
        this.year = _year;
        this.colour = _colour;
        this.extras = _extras;
    }

    getDetails() {
        return `
            creator: ${this.creator}
            functions: ${this.functions}
            Year: ${this.year}
            Colour: ${this.colour}
            Extra: ${this.extras}
        `;
    }
}

export default Car;