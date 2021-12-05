import MainFacade from "../MainFacade";
import MainProxy from "../MainProxy";
import Dialog from "../view/Dialog";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DebbyScene extends cc.Component {


    @property(cc.Button)
    btnBj: cc.Button = null;

    @property(cc.Button)
    btn1s: cc.Button = null;

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property(cc.Prefab)
    dialogPrefab: cc.Prefab = null;

    dialog: Dialog;
    anim: cc.Animation = null;


    @property(cc.Label)
    labelMoney: cc.Label = null;

    @property(cc.Label)
    labelTime: cc.Label = null;

    time = 15;
    proxy:MainProxy = null;
    start() {
        this.proxy= MainFacade.getInstance().retrieveProxy(MainProxy.NAME);
        this.labelMoney.string = '現金: ' + this.proxy.money;



        this.dialog = cc.instantiate(this.dialogPrefab).getComponent('Dialog');
        this.node.addChild(this.dialog.node);

        this.dialog.node.active = false;





        this.btnBj.node.on('click', this.bj, this);
        this.btn1s.node.on('click', this.sex, this);


        this.anim = this.sprite.getComponent(cc.Animation);



        this.setTimer();

    }

    setTimer() {
        let self = this;

        const callBack = () => {
            if (this.time == 0) {
                this.loadSpriteFrame('debby/debby_over_1')
                alert('男子: 黛比我回來了');
                alert('黛比: .....我男友回來了你快走');
                alert('好!');
                alert('我穿好褲子匆忙地離開黛比的房間');

            } else {
                self.time--;
                self.labelTime.string = "時間: " + this.time;
            }
        };

        this.labelTime.schedule(callBack, 1, this.time);

    }

    loadSpriteFrame(url) {
        var self = this;
        cc.resources.load(url, cc.SpriteFrame, function (err, f: cc.SpriteFrame) {
            self.sprite.spriteFrame = f;
        });
    }



    setDialogText(text) {
        this.dialog.setText(text);
    };

    sex() {
        alert('我想要升級1s');
        if(this.proxy.money > 0){
            alert('黛比: 我不是做那種的女生.....');
        }else{
            alert('黛比: 乞丐滾');
        }
    }


    bj() {

        if (this.proxy.money >= 0) {
            this.anim.play('bj');
            this.anim.once('finished', this.shoot, this);
        } else {
            alert('黛比: 乞丐還想嫖妓阿');
        }

    }
    shoot() {

        this.proxy.money -= 1500;


        this.labelMoney.string = '現金: ' + this.proxy.money;

        if (this.proxy.money < 0) {
            this.loadSpriteFrame('debby/debby2');

            alert('糟糕!!錢不夠付');

            alert('黛比: 沒錢還敢嫖妓!!');

        } else {
            this.loadSpriteFrame('debby/debby1');
        }
    }
}
