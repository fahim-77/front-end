////////// one //////////

let obj= {
    shop: {
        book: {
            fee: 2000 ,
            count: 20
        }
    }
}
// console.log(obj);


////////// two /////////

const keyName2= "pen";
const item2= {
    fee: 500,
    count: 10 
}
obj= {
    shop: {
        book: {
            fee: 2000 ,
            count: 20
        },
        [keyName2] : item2
    }
}
// console.log(obj);


////////// three //////////

const keyName3= "erase";
const item3= {
    fee: 50,
    count: 20
}
let value= false;
if (item3.fee > 0) {
    if (item3.count > 0) {

        value= true;
        console.log("next step : Recognizing duplicate data and new data");
    }
    else{
        console.log("the count can not be negative or zero value");
    }
}
else{
    console.log("the fee can not be negative or zero value");
}


////////// four //////////

if (value === true) {
    if (keyName3 in obj.shop === false) {
        console.log("It was checked : The data is new");
        obj= {
            shop: {
                book: {
                    fee: 2000 ,
                    count: 20
                },
                [keyName2] : item2 ,
                [keyName3] : item3
            }
        }
        console.log(obj);
        console.log("Changes saved");
    }
    else {
        console.log("It was checked : The data is available in shop");
    }
}