let userProfile = (function(){
    let name = "momin";
    let age = 23;

    return{
        displayInfo:function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

userProfile.displayInfo();