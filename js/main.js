for (i = 0; i < 25; i++) {
  console.log(i);
}
let a = 0;
while (a < 20) {
  a++;
  console.log(a);
}
let j = 1;
do {
  console.log(j);
  j++;
} while (j < 30);

const numb = [2, 3, 6, 7, 8, 9, 23, 24, 29];

for (let numb = 2; numb <= 2; numb++) {
  console.log(numb);
  for (let numb = 6; numb <= 6; numb++) console.log(numb);
  for (let numb = 8; numb <= 8; numb++) console.log(numb);
  for (let numb = 24; numb <= 24; numb++) console.log(numb);
}

let day;
switch (new Date(0).getDay()) {
  case 0:
    day = "კვირა";
    break;
  case 1:
    day = "ორშაბათი";
    break;
  case 2:
    day = "სამშაბათი";
    break;
  case 3:
    day = "ოთხშაბათი";
    break;
  case 4:
    day = "ხუთშაბათი";
    break;
  case 5:
    day = "პარასკევი";
    break;
  case 6:
    day = "შაბათი";
}
console.log(new Date());
