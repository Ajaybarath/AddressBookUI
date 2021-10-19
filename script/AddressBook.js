class AdderssBook {

    constructor(...params) {
        this.id = params[0]
        this.name = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phone = params[6]
    }

    set name(name) {
        let namrRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (namrRegex.test(name))
            this._name = name;
        else throw 'Name is Incorect'
    }

    set address(address) {
        let addressRegex = RegExp("[a-zA-Z]{3,}[' '][a-zA-Z]{3,}[' '][a-zA-Z]{3,}")
        if (addressRegex.test(address))
            this._address = address;
        else throw 'Address is invalid'
    }

    set city(city) {
        this._city = city;
    }

    set state(state) {
        this._state = state;
    }

    set zip(zip) {
        this._zip = zip;
    }

    set phone(phone) {
        let phoneRegex = RegExp("^([91][6-9][0-9]{9})$|^([+91][6-9][0-9]{9})$|^([6-9][0-9]{9})$")
        if (phoneRegex.test(phone))
            this._phone = phone;
        else throw 'phone number is invalid'
    }

    get name() {
        return this._name;
    }

    get address() {
        return this._address;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phone() {
        return this._phone;
    }

    toString() {
        return "name= " + this.name + ", address= " + this.address + ", city= " + this.city + ", state= " + this.state + ", zip= " + this.zip + ", phone= " + this.phone;
    }
}