
const {ccclass, property} = cc._decorator;

@ccclass
export default class BtnBack extends cc.Component {


    @property(cc.Button)
    btnBack: cc.Button = null;

    start () {

        this.btnBack.node.on('click', function(){

            cc.director.loadScene('IndexScene');

        }, this);



    }

}
