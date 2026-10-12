
const actionToBind = {
    moveLeft:{
        name:"moveLeft",
        keys_code:[37,65],
        enable: false,
        
    },
    moveRight:{
        name:"moveRight",
        keys_code:[39,68],
        enable: false,
    },
    moveUp:{
        name:"moveUp",     
        keys_code:[38,87],
        enable: false,
    },
    moveDown:{
        name:"moveDown",
        keys_code:[40,83],
        enable: false,
    },

};

// document.addEventListener('keydown', function(event) {
//     console.log(event.target);
 
// });
const target = document.querySelector('text');
const controller = new InputController(actionToBind,target);

class InputController {
    constructor(actionToBind, target){
        this.actionToBind = actionToBind;
        this.target = target;
        this. enabled = false;
        this.focused = false;
        this.ACTION_ACTIVATED = "input-controller:action-activated";
        this.ACTION_DEACTIVATED = "input-controller:action-deactivated";

        target.addEventListener('keydown',function(event){
            for( let elem  in actionToBind){
            
                for( let el in elem){
                    for(let i = 0 ; i < el.keys_code.length(); i++){
                        if (el.keys_code[i]== event.event.keyCode){
                            const actionName = el.name;
                        }
                    }
                    
                }
            }
        });
        
        
    
        // bindAction(actionToBind){

        // }

        // enableAction(actionName){
            

        // }
        // disableAction(actionName){

        // }
        // _attach(target) {
        //     target.addEventListener('keydown',function(event){

        //     });
            
        // }
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