export class User {
    name:string = "";
    email:string = "";
    address:string = "";

    constructor (obj?:any ) {
        this.name = obj ? obj.name : "";
        this.email = obj ? obj.email : "";
        this.address= obj ? obj.address : "";
    }
    // toString() {
    //     return this.name + ', ' + this.email + ', ' + this.address;
    // }
    toJson(){
        return 
    }
}
