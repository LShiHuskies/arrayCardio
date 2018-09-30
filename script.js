
const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

// const list = document.getElementById('list');
//
// // console.log(list)
//
// const addList = document.createElement('P');
//
// let insert = inventors.map(inventor => {
//   return addList.innerHTML += `${inventor.first} ${inventor.last}`
// })







const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
                'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
                'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
                'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
                'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berie, Milton',
                'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
                'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const fifteen = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1599);

console.table(fifteen);

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last)

console.table(fullNames);

const sortedList = inventors.sort((a,b) => a.year > b.year ? 1 : -1)

console.table(sortedList);

const totalYears = inventors.reduce((total, inventor) => {

  return total + (inventor.passed - inventor.year)
}, 0);

console.log(totalYears);

const oldest = inventors.sort((a,b) => {
  return (a.passed - a.year > b.passed - b.year) ? -1 : 1
});

console.table(oldest);




// const category = document.querySelector('.mw-category');
//
// const links = [...category.querySelectorAll('a')];
// // or use Array.from(category.querySelectorALL('a'))
//
//
// const de = links
//               .map(link => link.textContent)
//               .filter(streetName => streetName.includes('de'));

const alpha = people.sort((a, b) => {
  const [alast, afirst] = a.split(' ,');
  const [blast, bfirst] = b.split(' ,');
  // const parts = a.split(' ,')
  return alast > blast ? 1 : -1;
});

console.log(alpha);



const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',
'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item){
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});


console.log(transportation);
