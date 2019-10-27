let text = 'Hello World!'; 

text.split('').forEach((item, index) => {
 if(item === 'o') { 
   console.log(index + 1)
 }}
); 

text.split('').filter(symbol => symbol !== 'l').join('');

