const data = '21345A67098';

data.split('').filter(char => char !== '0' && char % 2 === 0).join('');