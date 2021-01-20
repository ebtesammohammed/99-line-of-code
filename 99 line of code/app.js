let friends = ['Jake', 'Zak', 'Lewis', 'Michelle', 'Rachel'];

// let code;
for (let f = 0; f < friends.length; f++)
{
    console.log(friends[f] + ':')
    for (let counter = 99; counter < 100; counter--) {
         if (counter === 2) {
         console.log(counter + " lines of code in the file, " + counter + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [counter - 1] + " line of code in the file!");
            } else {
         if (counter === 1) {
   console.log(counter+ " line of code in the file, " + counter + " line of code; " + [friends[f]] + " strikes one out, clears it all out, no more lines of code in the file!")
     break
       } else {
         console.log(counter + " lines of code in the file, " + counter + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [counter - 1] + " lines of code in the file!");
      }
    }
            
  }
}