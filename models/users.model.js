const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({
   
    name: {
        type: String
    },
     email: {
        type: String,
    },
     password: {
        type: String
    },
   
    department: {
        type: String
    },
    designation: {
        type: String
    },
    role : {
        type : String
    },
    gender : {
        type : String
    },
    phone : {
        type : String
    },

    birthdate : {
        type : String
    },
    dateofjoin : {
        type : String
    }
    ,
    employeeid : {
        type : String
    },
    address : {
        type : String
    },

    personalInformation : [
        {
            PassportNo : { type : String },
            PassportExpirationDate : { type : String},
            Tel : { type : String},
            Nationality : { type : String},
            Religion : { type : String},
            MartialStatus : { type : String},
            EmploymentofSpouse : { type : String},
            NoOfChildren : { type : String}
        }
    ],
    Emergencycontact : {
        name : { type : String},
        relationship : { type : String},
        phone : { type : String},
    },
    FamilyInformaion : [{
        name : { type : String},
        relationship : { type : String},
        dateofbirth : { type : String},
        phone : { type : String},
    },
    ],
    BankInformaion : {
        BankName : { type : String},
        BankAccountNo : { type : String},
        IFSCCode : { type : String},
        panno : { type : String},
    },
    Experience : [
        {
        name : { type : String},
 
        Duration : { type : String},
        }
    ],
    EducationInformaion : [
        {
            CollegeName : { type : String},
            Education : { type : String},
            Duration : { type : String},  
        }
    ]



   
  
    
});


const timesheetschema = new Schema({
    name: {
        employeeid: String
    },
     date: {
        type: String,
    },
    projects : {
        type : String
    },
    assignedhours : {
        type : String
    },
    hours : {
        type : String
    },
    Description : {
        type : String
    }
})

const overtimeschema = new Schema({
    employeeid : {
        type : String
    },
    otdate : {
        type : String
    },
    othours : {
        type : String
    },
    ottype : {
        type : String
    },
    Description : {
        type : String
    }
})





var sc = { 'Users': mongoose.model('User', Userschema), 'OverTime': mongoose.model('OverTime', overtimeschema), 'TimeSheet': mongoose.model('TimeSheet', timesheetschema) };

module.exports = sc;

