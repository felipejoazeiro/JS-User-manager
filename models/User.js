class User {

    constructor(name, gender, birth, country, email, password, photo, admin){

        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    get id(){
        return this._id;
    }

    get register(){
        return this._register;
    }

    get name(){
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get birth() {
        return this._birth;
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    get photo() {
        return this._photo;
    }

    get password() {
        return this._password;
    }

    get admin() {
        return this._admin;
    }

    set photo(value){
        this._photo = value;
    }

    loadFromJSON(json){
        for(let name in json){
            this[name] = json.name
            switch(name){
                case '_register':
                    this[name]=new Date(json[name])
                break;
                default:
                    this[name=json[name]]
            }
        }
    }

    static getUserStorage(){
        let users = []
        if(localStorage.getItem("user")){
            user = JSON.parse(localStorage.getItem("users")
            )
        }
        return users
    }

    getNewId(){
        let usersID = parseInt(localStorage.getItem("usersID"))
        if(!window.id) usersID = 0;

        usersID++
        localStorage.setItem("usersID", usersID )
        return usersID

    }

    save(){
        let users = User.getUserStorage()

        if(this.id > 0){
            users.map(u=>{
                if(u._id == this.id){
                    Object.assign(u, this)
                }
                return u;
            })
        }else{
            this._id = this.getNewId()

            users.push(this)
        }
        localStorage.setItem("users", JSON.stringify(users))
    }
    remove(){
        let users = User.getUserStorage()
        users.forEach((userData, index)=>{
            if(this._id == userData._id){
                users.splice(index,1)
            }
        })
        localStorage.setItem("users", JSON.stringify(users))
    }
}