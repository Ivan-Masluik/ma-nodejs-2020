const user = {
    firstName: 'john', // string lastName: 'Doe', // string
    lastName: 'Doe',// 
    rate: 0.86, // number in range 0..1
    address: { // not empty object or null
        line1: '15 Macon St', // string 
        line2: '', // string
        city: 'Gotham' // string
    },
    phoneNumbers: [ // array containing at least 1 element
        {
            type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP 
            number: '(555) 555-1234' // string in specific format
        }, {
            type: 'LINE',
            number: '(555) 555-5678' }
    ] };

    function isString(x) {
        console.log (Object.prototype.toString.call(x))
        return Object.prototype.toString.call(x) === "[object String]"
    }
    function between(x, min, max) {
        return x >= min && x <= max;
        }
    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }
    function isPhoneNumber(number) {
        let re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        return re.test(number);
    }
    function isValidType(type) {
        let validTypes =  ["MOBILE", "LINE", "VOIP"];
        return validTypes.includes(type);
    }
    
    function validateUser(user) {
        let errors = [];
        if (!isString(user.firstName)){
            console.log('valide it is string')
        }
        if (!isString(user.lastName)){
            console.log('valide it is string')
        }
        if (!between(user.rate,0,1)) {
            console.log("valide rate between 0 and 1")
        }   
         if (!isObjectEmpty( address)) {

         }  
    }
    validateUser(user)
    