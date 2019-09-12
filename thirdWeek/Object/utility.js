module.exports = {

    /**
     *  @Purpose : Execute Object Create/Read/Update/Delete/Merge/Split/Sort/Search/Replace examples
    */

    /**********************************************Create Object***************************************************/


    CreateObject() {
        const studentInfo = {
            id: "01",
            name: "priyanka",
            showDetails() {
                console.log(`My name is ${studentInfo.name} and Id is ${studentInfo.id}`);
            }
        };
        const stuObject = Object.create(studentInfo);
        stuObject.showDetails();
    },

    /**********************************************Update Object***************************************************/
    UpdateObject() {
        var obj = {};
        Object.defineProperties(obj, {
            'property1': {
                value: 42,
                writable: true
            },
            'property2': {
                value: "priyanka",
                writable: true
            }
        });
        console.log("object value ==> ", obj.property2);
    },

    /**********************************************Delete Object***************************************************/
    Deleteobject() {
        var Employee = {
            id: "01",
            name: "puja",
            city: "Nagpur"
        }
        console.log("Details of Employee ==> ", Employee);
        delete Employee.id;
        console.log("Delete Employee 'ID' ==> ", Employee);
        console.log("Employee 'ID' is ==> ", Employee.id);
    },

    /**********************************************Merge Object***************************************************/
    MergeObject(details, address) {

        const fullDetails = { ...details, location: address }
        console.log("Full Details of employee ==> ", fullDetails);
        console.log();
        const fullDetailsWithAssign = Object.assign({}, details, { location: address });
        console.log("Full Details of employee with Assign method used  ==> ", fullDetailsWithAssign);
    },

    /**********************************************Split Object***************************************************/
    SplitObject(details) {
        const arr1 = Object.keys(details);
        const arr2 = arr1.map((data) => {
            return details[data];
        });
        console.log("keys of object ==> ",arr1)
        console.log("values of object ==> ", arr2)


    },
  /**********************************************Sort Object***************************************************/
  SortObject(){
        var maxSpeed = {
            car: 300, 
            bike: 60, 
            motorbike: 200, 
            airplane: 1000,
            helicopter: 400, 
            rocket: 8 * 60 * 60
        };
        var sortable = [];
        for (var vehicle in maxSpeed) {
            sortable.push([vehicle, maxSpeed[vehicle]]);
        }
        
        sortable.sort(function(a, b) {
            return a[1] - b[1];
        });
        console.log("Sorted Array ==>",sortable)
    
    }
    
}