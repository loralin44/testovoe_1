
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
        this.enabled = false;
        this.focused = false;
        this.ACTION_ACTIVATED = "input-controller:action-activated";
        this.ACTION_DEACTIVATED = "input-controller:action-deactivated";
        this.actionName = '';
        this.key = '';
        this.keyCode = null;
        this.dontEnable = false;

       
        

    }
    _getActionName(){

    }

    _bindActions(actionToBind){
        this._attach(target);
        for (let action in actionToBind){
            for (let elem in action){
                for (let i = 0 ; i < elem.keys_code.length(); i++){
                    if (elem.keys_code[i] == this.keyCode){
                        this.actionName = elem.name;
                    }
                }
            }
        }
    }


    // target.addEventListener('keydown',function(event){
    //     for( let elem  in actionToBind){
            
    //         for( let el in elem){
    //             for(let i = 0 ; i < el.keys_code.length(); i++){
    //                 if (el.keys_code[i] == event.event.keyCode){
    //                         this.actionName = el.name;
    //                         this.keyCode = el.keyCode;
    //                         console.log(ac);
    //                         console.log(keyCode);
    //                 }
    //             }
                    
    //         }
            
    // });
        
        
   

    _enableAction(actionName){
        if(_isActionActive()){

        }else{

        }
            
    }
    _disableAction(actionName){

    }
    _attach(target) {
        target.addEventListener('keydown', (e) => {
            
            // this.key = event.key;
            // this.keyCode = event.keyCode;
             
        });
    }        
    _detach(){
        this.target.removeEventListener('keydown');  
    }
    _isActionActive(actionName) {
        if(actionName == ''){
            return false;
        }else{
            return true; 
        }   
    }

    _isKeyPreesed(keyCode){
        if (keyCode!= null){
            return true;
        }else {
            return false;
        }
          

    }     
        
    
}