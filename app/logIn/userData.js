export const userData = {
  userID: "",
  name: "",
  password: "",
  setName: function (name) {
    this.name = name;
    localStorage.setItem("setName", name);
  },
  getName: function () {
    return users.name;
  },
  setPass: function (pass) {
    this.password = pass;
    localStorage.setItem("setPass", pass);
  },
  getPass: function () {
    return users.password;
  }
};
