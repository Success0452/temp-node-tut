const { name, wisdom, authority } = require('./4-names');
const SayHi = require('./5-util');
const { singlePerson } = require('./6-alternative-flavour');

require("./7-mind-grenade");
const data = require('./6-alternative-flavour')
console.log(data)

SayHi("Famous");
SayHi(name);
SayHi(wisdom);
SayHi(authority);

singlePerson
