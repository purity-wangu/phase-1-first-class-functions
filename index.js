const receivesAFunction = function(spy){
return spy()
}
// spy();
function spy(){
    console.log("spy")
}


const returnsANamedFunction= function (){
    
    return function before(){
        console.log("before")
    }
}


const returnsAnAnonymousFunction = function(){
    return function(){
        
    }
}
    


