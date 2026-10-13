
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

        this._KeyDown = null;
        this._KeyUp = null;

        this._activity = new Map();
        this._KeyToAction = new Map();
        this._pressedKey = new Set();
        this.dontEnable = false;
        this._target = null;
        
        
    }
    //достаем данные из объекта и преобразуем в Map для удобства доступа 
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
    _event(event_type, actionName){
        if(!this._target)return;
        const event = new CustomEvent(event_type,{
            detail:{actionName : 'actionName'}
        });
        event.actionName = actionName;
        this._target.dispatchEvent(event);

    }

    enableAction(actionName){
        const action = this._activity.get(actionName);
        
        if(!action) return;
        
        if(action.enable){
            return;
        }
        action.enable = true;
        
        if (this.isActionActive(action)){
           this._event(this.ACTION_ACTIVATED,actionName);
             
        }

    }
    

    disableAction(actionName){
        const action = this._activity.get(actionName);
        action.enable = false;
        
    }
    
    attach(target, dontEnable) {
        this._target = target;

        if (!this._target){
           return;
        }
        this._KeyDown = (e) =>{

            if(!this._KeyToAction.has(e.keyCode)) return;
            this._pressedKey.add(e.keyCode);
              
        }
        this._KeyUp = (e) =>{
            this._pressedKey.delete(e.keyCode);
            
        }
        this._target.addEventListener('keydown', this._KeyDown);
        this._target.addEventListener('keyup', this._KeyUp);

    }  

    detach(){

        if(this._target){
            this._target.removeEventListener('keydown', this._KeyDown); 
            this._target.removeEventListener('keyup', this._KeyUp); 
        }

        this._KeyUp = null;
        this._KeyUp = null;
        this._target = null;
        this._pressedKey.clear();
 
    }


    isActionActive(actionName) {
        const action = this._activity.get(actionName);
        if(!action.enable) return;
        if(!action.actionName) return;
        for (const key in action.keys){
            if(this.isKeyPreesed(code)){
                return true;
            }else {
                return false;
            }
        }
        
    }

    isKeyPreesed(keyCode){
        if(this._pressedKey.has(keyCode))return;

    }
         
}

const stage  = document.querySelector('stage');

const controller =  new InputController(actionToBind, stage);

controller.enableAction('moveLeft');
controller.detach();