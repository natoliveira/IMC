function getGroupMembers() {
  const members = [
    'Raphael Gomide',
    'John Petrucci',
    'John Myung',
    'Jordan Rudess',
    'James Labrie',
    'Mike Mangini',
  ];

  // Dream Theater

  members.sort((a, b) => b.localeCompare(a));

  return members;
}

function getFullName(...value) {
  return value.join(' ');
}

function transform(input) {
  return input.map((number) => number / 10 + 1);
}

function onlyNumbersFrom(value) {
  //const array = Array.from(value);
  // const filter = value.split('').filter((item) => {
  //   return (
  //     item === '0' ||
  //     item === '1' ||
  //     item === '2' ||
  //     item === '3' ||
  //     item === '4' ||
  //     item === '5' ||
  //     item === '6' ||
  //     item === '7' ||
  //     item === '8' ||
  //     item === '9'
  //   );
  // });

  const filter = value.split('').filter((item) => {
    return !isNaN(item) && item !== ' ';
  });

  return filter.join('');
}

console.log(getGroupMembers());
console.log(getFullName('Raphael', 'Gomide', 'dos', 'Santos'));
console.log(transform([10, 20, 30, 40, 50]));
console.log(transform([61, 71, 81, 91]));
console.log(onlyNumbersFrom('5454ç56454.!?54d545-241 5d45d fsfsdfsd_d f'));
