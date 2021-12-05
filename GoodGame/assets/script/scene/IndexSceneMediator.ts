import KYPureMediator from "../KYCreatorSDK/DesignPatterns/KYPrueMVC/Mediator/KYPureMediator";
import KYPureNotification from "../KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import MainFacade from "../MainFacade";
import MainProxy from "../MainProxy";
import IndexScene from "./IndexScene";

export default class IndexSceneMediator extends KYPureMediator {


    static NAME = 'IndexSceneMediator';

    proxy:MainProxy = null;

    constructor(component){
        super(IndexSceneMediator.NAME, component);
    }


    listNotificationInterests():string[]{
        return[];
    }

    handleNotification(n: KYPureNotification){

    }

    onRegister(){
        this.proxy = MainFacade.getInstance().retrieveProxy('MainProxy');
        this.getComponent().btnCharacter.node.on('click', this.clickCharacter, this);
        this.getComponent().btnDraw.node.on('click', this.clickDraw, this);
        this.getComponent().labelLv.string += this.proxy.lv.toString();
        this.getComponent().labelMoney.string += this.proxy.money.toString();



    }

    getComponent(): IndexScene{
        return super.getComponent();
    }
    clickDraw(){
        cc.director.loadScene('DrawScene');
    }
    clickCharacter(){
        cc.director.loadScene('GirlScene');

    }
    
}
