export default class UserData {
  constructor(name,password){
    this.getName = () => name;
    this.getPass = () => password;

    this.setName = (name) => {
      name = name;
      localStorage.setItem("setName",name);
    }

    this.setPass = (pass) => {
      password = pass; 
      localStorage.setItem("setPass", pass);
    };
  }
}
