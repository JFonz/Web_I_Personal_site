class Visitor {
    constructor(id, fName, lName, address, city, state, zip, cellPhone, email, findOption) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.cellPhone = cellPhone;
        this.email = email;
        this.findOption = findOption;
    }

    get fullName() {
        return `${this.fName} ${this.lName}`;
    }

    get fullAddress() {
        return `${this.address} ${this.city}, ${this.state} ${this.zip}`;
    }
}

let visitors = [ new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","Ut","84664","801-444-5555","ken@gmail.com",{google:true,newspaper:false,friend:true}),
                new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","Ut","84664","801-444-5555","ben@gmail.com",{google:true,newspaper:false,friend:false})];

function modelAddVisitor(visitor) {
    visitors.push(visitor);
}

function modelDeleteVisitor(id) {
    visitors.splice(findVisitorIndex(id), 1);
}
function findVisitorIndex(id) {
    //returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object
    for(var i = 0; i < visitors.length; i++) {
        if(visitors[i].id == id) {
            return i;
        }
    }
}
function modelUpdateVisitor(visitor) {
    //finds and updates a visitor object a your array
    $("#first-name").val(visitor.fName);
    $("#last-name").val(visitor.lName);
    $("#address").val(visitor.address);
    $("#city").val(visitor.city);
    $("#state").val(visitor.state);
    $("#zip").val(visitor.zip);
    $("#email").val(visitor.email);
    $("#phone").val(visitor.cellPhone);

    for(var option in visitor.findOption) {
        if(visitor.findOption[option])
        {
            $(`#${option}`).prop("checked", true);
        }
    }
    modelDeleteVisitor(visitor.id);
} 