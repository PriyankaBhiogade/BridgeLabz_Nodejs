const promise1 = function(){
    console.log("slow Promise is start....");
    return new Promise(resolve => {
        setTimeout(function() {
            resolve("slow");
            console.log("slow promise is done....");
        },2000);
    });
};
const promise2 = function() {
    console.log("fast promise is start....");
    return new Promise(resolve => {
        setTimeout(function(){
            resolve("fast");
            console.log("fast promise is done...")
        },1000);
        });
};

const start1 = async function() {
    console.log("sequential Start");
    const slow = await promise1();
    const fast = await promise2();

}
const start2 = async function(){
 console.log("concurrent Start");
 const slow = promise1();
 const fast = promise2();  
 console.log(await slow);
 console.log(await fast);  
}

// start1();
start2();