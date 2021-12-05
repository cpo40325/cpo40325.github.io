import CpoUtil from "../cpoSDK/cpoUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DrawScene extends cc.Component {


    @property(cc.Sprite)
    spriteCard: cc.Sprite = null;
    @property(cc.Button)
    btnDraw: cc.Button = null;
    @property(cc.Button)
    btnBack: cc.Button = null;

    start () {



        this.btnDraw.node.on('click', this.onDraw, this);
        this.btnBack.node.on('click', CpoUtil.goIndex, this);


    }

    onDraw() {

        CpoUtil.loadSpriteFrame(this.spriteCard, 'vivi/vivi1');
        this.spriteCard.spriteFrame
        this.spriteCard.node.setContentSize(240, 360);
        console.log(this.spriteCard.node);
        
    }

}
