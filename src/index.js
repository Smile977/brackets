module.exports = function check(str, bracketsConfig) {
  // your solution
  let a = str;
  let b = bracketsConfig;

  //console.log(a);
  //console.log(b);

  let left1 = '(';
  let right1 = ')';

  let left2 = '[';
  let right2 = ']';

  let left3 = '{';
  let right3 = '}';

  let Stack = [];

  for(let i = 0; i < a.length; i++)
  {
    if (a[i] == left1 || a[i] == left2 || a[i] == left3)
    {
      Stack.push(a[i]);      
    }
    if (a[i] == right1 || a[i] == right2 || a[i] == right3)
    {
      Stack.pop(a[i-1]);
    }
  }

  if (Stack == 0)
  {
    return true;
  } else {
    return false;
  }
}
