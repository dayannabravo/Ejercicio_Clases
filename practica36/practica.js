'use strcit'
class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email
    }
    login(username, password){
        //validar usuario y contraseña
        if(username === this.username && this.password === password){
            alert('WELCOME');
        }else{
            alert('ERROR..!!!');
        }
    }
    resetPassword(newPassword){
        this.password = newPassword;
    }

    updateInfo(newEmail){
        this.email = newEmail;
    }

    showInfo(){
        alert(`USUARIO: ${this.username} ${this.password} (${this.email})`)
    }
    
}

//INSTANCIAR
let user = new User('hdbb', '1234', 'd@gmail.com');
user.login('hdbb', '1234');
user.resetPassword('admin');
user.login('hdbb', 'admin');
user.updateInfo('daya@gmail.com');
user.login('daya@gmail.com');
user.showInfo();

