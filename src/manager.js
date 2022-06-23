'use strict';
//Qatar Airways
const events =require("./event");
const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker');

//Date.now()
// let Date=new Date();

setInterval(() => {
    let pioletName = faker.name.findName();
let destination=faker.address.cityName();
// let dtToday = new Date(date.now);
    let flight=
    {
        events:"new-flight",
        time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        Details:{
            airLine: 'Qatar Airlines',
            flightID:uuidv4(),
            pioletName:pioletName,
            destination:destination
        },        
    }
    events.emit("new-flight",flight)
}, 10000)