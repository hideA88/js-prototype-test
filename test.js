var test = 10;

var Class_ = function Constructor_(name){
  this.name = name
  this.x = 0;
  this.y = 0;
}

Class_.prototype.z = 10
Class_.z = 20
//Constructor_.prototype.x = 20   error

var classA = new Class_('classA');
var classB = new Class_('classB');
var classC = {name: 'classC'}

Class_.prototype.w = -1
Class_.w = -2
//classA.prototype.x = 10   error
//classC.prototype.x = 10   error


console.log(Class_)
console.log(classA)
console.log('classA.z:'+classA.z)
console.log('classA.w:' + classA.w)
console.log(classB)
console.log(classC)
