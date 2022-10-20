const object = {
  name: 'Shen',
  age: 25
};

function fuck(x) => {
  alert('fuck you ' + x);
}

// from below this is an experimental class
class Fucker  {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get identity() {
    return {name: this.name, age: this.age}
  } 
}
