
const {ccclass, property} = cc._decorator;

@ccclass
export default class GirlScene extends cc.Component {


    @property(cc.Sprite)
    spriteDebby:cc.Sprite = null;

    @property(cc.Button)
    btnBack:cc.Button = null;
    
    start () {

        this.spriteDebby.node.on('click',function(){
            cc.director.loadScene('DebbyScene');
        },this);

        this.btnBack.node.on('click',function(){
            cc.director.loadScene('IndexScene');
        },this);
    }

}
