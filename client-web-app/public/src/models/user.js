function User(id = 0, email, first, last, pwd, role) {

    this._id = id;
    this.email = email;
    this.first_name = first;
    this.last_name = last;
    this.password = pwd;
    this.role = role;
}

// export this as a module
export { 
    Product
}