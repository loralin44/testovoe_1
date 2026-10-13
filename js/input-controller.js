
const actionToBind = {
    moveLeft:{
        keys:[37,65],
        enable: false,
        
    },
    moveRight:{
        keys:[39,68],
        enable: false,
    },
    moveUp:{     
        keys:[38,87],
        enable: false,
    },
    moveDown:{
        keys:[40,83],
        enable: false,
    },

};




class InputController {

    constructor(actionToBind, target){
        this.actionToBind = actionToBind;
        this.target = target;

        this.enabled = false;
        this.focused = false;

        this.ACTION_ACTIVATED = "input-controller:action-activated";
        this.ACTION_DEACTIVATED = "input-controller:action-deactivated";

        // this.actionName = '';
        // this.key = '';
        // this.keyCode = null;
        // this.dontEnable = false;
        this._activity = new Map();
        this._KeyToAction = new Map();
        
        
    }
    _getActionName(){

    }

    _bindActions(actionToBind){
        for (const activeName in actionToBind){
            const cfg = actionToBind[activeName];
            if(!this._activity.has(activeName)){
                this._activity.set(activeName,{
                    keys : new Set(),
                    enable : cfg.enable === true
                })
            }
            const action = actionToBind[activeName];
            for (const code in cfg.keys){
                action.keys.add(code);
            }

        }
    }



        
        
   

    _enableAction(actionName){
        if(_isActionActive()){

        }else{

        }
            
    }
    _disableAction(actionName){

    }
    _attach(target) {
        target.addEventListener('keydown', (e) => {
            // console.log(this.key);
            
            // this.key = e.key;
            // this.keyCode = e.keyCode;
             
        });
    }  

    _detach(){
        // this.target.removeEventListener('keydown');  
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