
const {ccclass, property} = cc._decorator;

@ccclass
export default class Dialog extends cc.Component {

    start () {

    }




    setText(text:string){
        this.node.getChildByName('Text').getComponent(cc.Label).string = text;
    }

    setOnclickListener(f:Function){

        this.node.once('click', ()=>{
            f();
        }, this);

    }
    

}

