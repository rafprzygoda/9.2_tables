var girlNames = ['Ania', 'Patrycja', 'Gosia'];
var boyNames = ['Franek', 'Mietek', 'Jacek'];

var allNames = girlNames.concat(boyNames);
console.log(allNames);

var newName = prompt('Podaj nowe imie zenskie lub meskie');
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    console.log('Takie imię już istnieje');
}
console.log(allNames);