let names = ['Ram', 'Shyam', 'Gita']

console.log(names.find(name => name !== 'Ram'))
console.log(names.filter(name => name !== 'Ram'))
console.log(names.map(name => `<p>${name}</p>`))