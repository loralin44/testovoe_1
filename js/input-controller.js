
// const actionToBind = {
//     moveLeft:{
//         keys:[37,65],
//         enable: false,
        
//     },
//     moveRight:{
//         keys:[39,68],
//         enable: false,
//     },
//     moveUp:{     
//         keys:[38,87],
//         enable: false,
//     },
//     moveDown:{
//         keys:[40,83],
//         enable: false,
//     },

// };


class InputController {

    constructor(actionToBind, target){
        this.actionToBind = actionToBind;
        this.target = target;

        this.enabled = false;
        this.focused = false;

        this.ACTION_ACTIVATED = "input-controller:action-activated";
        this.ACTION_DEACTIVATED = "input-controller:action-deactivated";

    
        this._activity = new Map();
        this._KeyToAction = new Map();
        this._pressedKey = new Map();
        this.dontEnable = false;
        
        
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
                if(!this._KeyToAction.has(code)){
                    this._KeyToAction.set(code, new Set());

                }
                this._KeyToAction.get(code).add(activeName);
            }

        }
    }

    enableAction(actionName){
        const action = this._activity.get(actionName);
        
        if(!action.activeName) {
            return;
        }
        if(action.enable){
            return;
        }
        action.enable = true;
  
        if( this._isActionActive(action)){
            
        }
            
    }

    disableAction(actionName){
        const action = this._activity.get(actionName);
        action.enable = false;
        

    }
    _attach(target, dontEnable) {

        if (!target){
           return;
        }

        this._KeyDown = (e) =>{

            if(!this._KeyToAction.has(e.keyCode)) return;
            this._pressedKey.set(e.keyCode, e.key);
              
        }
        this._KeyUp = (e) => {
            this._pressedKey.delete(e.keyCode);
            
        }
        target.addEventListener('keydown', this._KeyDown);
        target.addEventListener('keyup', this._KeyUp);

    }  

    _detach(){
        this.target.removeEventListener('keydown', this._KeyDown);  
    }


    _isActionActive(actionName) {
        const active = this._activity[actionName];
        for (const key of active.keys){
            if(this._pressedKey.get(key) == active.keys[key]){
                return true;
            }else{
                return false;
            }
        }
           
    }

    _isKeyPreesed(keyCode){
        if(this._pressedKey.get(key) == keyCode){
            return true;
        }else{
            return false;
        }

        
    }
    
  
        
    
}