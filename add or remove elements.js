function addOrRemove(input) {
     let arr = [];
     for (let x of input){
         let commands = x.split(' ');
         let command = commands[0];
         let number = Number(commands[1]);

         if (command === "add"){
             arr.push(number);
         }
         else if(command === "remove"){
             arr.splice(number, 1);
         }
     }

     for (let x of arr){
         console.log(x);
     }
}

addOrRemove(["add 3", "add 5","remove 1", "add 2"]);