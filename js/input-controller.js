
const actionToBind = {
    "left":{
        name:"moveLeft",
        keys:[37,65],
        enable: false,
        
    },
    "right":{
        name:"moveRight",
        keys:[39,68],
        enable: false,
    },
    "up":{
        name:"moveUp",
        keys:[38,87],
        enable: false,
    },
    "down":{
        name:"moveDown",
        keys:[40,83],
        enable: false,
    },

};

// document.addEventListener('keydown', function(event) {
//     console.log(event.target);
 
// });
const target = document.querySelector(".text");
const controller = new InputController(actionToBind,target);

class InputController {
    constructor(actionToBind, target) {
        this.actionToBind = actionToBind;
        this.target = target;
        this. enabled = false;
        this.focused = false;
        this.ACTION_ACTIVATED = "input-controller:action-activated";
        this.ACTION_DEACTIVATED = "input-controller:action-deactivated";

        

    
        // bindAction(actionToBind){

        // }

        // enableAction(actionName){
            

        // }
        // disableAction(actionName){

        // }
        attach(target){
            

        }
        // detach(){

        // }
        // isActionActive(actionName){

        // }

        // isKeyPreesed(keyCode){
        //     if(){

        //     }
            

        // }

        
        
    }
}