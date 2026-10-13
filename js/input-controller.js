
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
        

    }
    _attach(target, dontEnable) {
        if (!target){
            console.log('Ссылка на объект пуста!');
        }


        target.addEventListener('keydown', (e) => {
            this._pressedKey.set
            if( this._KeyToAction.keys == e.keyCode){
                this._pressedKey.add(e.keyCode);
            }
  
        });
    }  

    _detach(){
        // this.target.removeEventListener('keydown');  
    }
    _isActionActive(actionName) {
        if(!this._activity.has(actionName)){
            return false;
        }else{
            return true; 
        }   
    }

    _isKeyPreesed(keyCode){
        // if (){
        //     return true;
        // }else {
        //     return false;
        // }
          

    }     
        
    
}