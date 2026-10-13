// export class InputController{
//     constructor(actionToBind, target){
//         this.actionToBind = actionToBind;
//         this.target = target;

//         this.enabled = false;
//         this.focused = false;

//         this.ACTION_ACTIVATED = "input-controller:action-activated";
//         this.ACTION_DEACTIVATED = "input-controller:action-deactivated";

//         this._KeyDown = null;
//         this._KeyUp = null;

//         this._activity = new Map();
//         this._KeyToAction = new Map();
//         this._pressedKey = new Set();
//         this.dontEnable = false;
//         this._target = null;
//     }
// }
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
// const stage  = document.querySelector('stage');

// const controller =  new InputController(actionToBind, stage);

// controller.enableAction('moveRight');