

module.exports = {

    /**
     *  @Purpose : Execute Array Merge / Split / Splice / Filter / Search / Replace / Map examples
     */

    /**********************************************ArrayMerge***************************************************/
    MergeArray(arr1, arr2, arr3) {
        mergeTwoArray = arr1.concat(arr2);
        console.log("Merge Two Array ==> ", mergeTwoArray);
        mergeThreeArray = arr1.concat(arr2, arr3);
        console.log("Merge Three Array ==> ", mergeThreeArray);
        return mergeThreeArray;
    },

    /**********************************************Array Split***************************************************/
    SplitArray(arr) {
        const array1 = arr.split();
        console.log("Split Array without separator ==> ", array1);
        const array2 = arr.split('');
        console.log("Split Array with empty separator ==> ", array2[0]);
        const array3 = arr.split(' ');
        console.log("Split Array with space separator ==> ", array3);
    },

    /**********************************************Array Splice***************************************************/
    SliceArray(arr) {
        const arr1 = arr.slice(3);
        console.log("Slice Array with Begin Parameter ==> ", arr1);

        const arr2 = arr.slice(2, 3);
        console.log("Slice Array  with Begin & End Parameter==> ", arr2);

        const arr3 = arr.slice(1, 4);
        console.log("Slice Array  with Begin & End Parameter==> ", arr3);
    },

    /**********************************************Array Search***************************************************/
    SearchArray(arr) {
        const array = arr.find((arr) => arr > 6)
        console.log("New Array ==>", array);
        const fruits = [
            { name: 'apples', quantity: 2 },
            { name: 'bananas', quantity: 0 },
            { name: 'cherries', quantity: 5 }
        ];
        const getFruit = fruits.find(fruit => fruit.name === 'apples');
        console.log("Found matching Fruit ==> ", getFruit);
    },

    /**********************************************Array Replace***************************************************/
    ReplaceArray(arr) {
        arr.splice(1, 0, "aa");
        console.log("Add char at 1st position in  Array ==> ", arr);
        arr.splice(5, 'f', 'g', 'h');
        console.log("Add char at last in Array ==> ", arr);
        arr.splice(1, 1);
        console.log("Remove 1st char from Array ==> ", arr);
        arr.splice(2, 1, "cc")
        console.log("Replace 'c'to 'cc'==>", arr);
    },

    /**********************************************Array Filter***************************************************/
    FilterArray(arr) {
        const studentInfo = arr
            .filter((data) => {
                return data.name === "priyanka";
            })
        console.log("Priyanka's All information ==> ", studentInfo);
    },
    /**********************************************Array Map***************************************************/

    MapArray(arr) {
        const studentInfo = arr.map((data) => {
            return data.name;
        })
        console.log("All Student Name ==> ", studentInfo);
    }

}
