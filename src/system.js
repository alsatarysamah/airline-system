'use strict';
require("./manager");
require("./piolt")
const events =require("./event");

events.on("new-flight",handleNewFlight);
function handleNewFlight(flight){
    //Manager: new flight with ID ‘ds7g86sa8v87dsv60v876d’ have been scheduled
    console.log(`Manager: new flight with ID ${flight.Details.flightID} have been scheduled`)
    console.log(flight);
}

    // console.log(`Manager: we’re greatly thankful for the amazing flight, Jane doe    `);

module.exports=events;