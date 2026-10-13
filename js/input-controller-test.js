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
const stage  = document.querySelector('stage');

const controller =  new InputController(actionToBind, stage);
controller.enableAction('moveLeft');
controller.enableAction('moveRight');