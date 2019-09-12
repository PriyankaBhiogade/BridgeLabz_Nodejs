const util = require('./utility');

const details = {
    name: "Priyanka",
    lastName: "Bhiogade"
}
const address = {
    city: "nagpur",
    pincode: "443904"
}

 util.CreateObject();
 util.UpdateObject();
 util.Deleteobject();
 util.MergeObject(details,address);
 util.SplitObject(details);
 util.SortObject();