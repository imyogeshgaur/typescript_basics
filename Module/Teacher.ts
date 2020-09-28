export default class Login {
  name;
  LoginUser(name) {
    this.name = name;
    console.log(`The Teacher ${this.name} able to login !!!`);
  }
  getName(name) {
    this.name = name;
    console.log(`Welcome ${this.name} to the portal`);
  }
}
