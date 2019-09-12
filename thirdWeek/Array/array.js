const util = require('./utility');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
const arr3 = ['a', 'b', 'c', 'd', 'e'];
const arr4 = 'How are you doing ?';
const arr5 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const studentInfo = [
    { id: 2, name: "priyanka", tech: "MEAN" },
    { id: 8, name: "Ram", tech: "React" },
    { id: 40, name: "Puja", tech: "Java" },
    { id: 66, name: "Sham", tech: "Rebels" }];



// console.log(" Enter 1 for Merge Array\n 2.Split Array\n 3.Slice Array\n 4.Search Array\n 5.Replace Array\n 7.Filter Array\n 8.Map Array");
const mergeArray = util.MergeArray(arr1, arr2, arr3);

util.SplitArray(arr4);
util.SliceArray(arr1);
util.SearchArray(mergeArray);
util.ReplaceArray(arr3);
util.FilterArray(studentInfo);
util.MapArray(studentInfo);

