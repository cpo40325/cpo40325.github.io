import MainFacade from "../MainFacade";
import IndexSceneMediator from "./IndexSceneMediator";

const {ccclass, property} = cc._decorator;

@ccclass
export default class IndexScene extends cc.Component {


    @property(cc.Button)
    btnCharacter:cc.Button = null;


    @property(cc.Button)
    btnDraw:cc.Button = null;

    @property(cc.Label)
    labelLv:cc.Label = null;


    @property(cc.Label)
    labelMoney:cc.Label = null;



    facade:MainFacade = null;

    
    start () {

        this.facade = new MainFacade();

        this.facade.registerMediator(new IndexSceneMediator(this));



        cc.debug.setDisplayStats(false);




    }

    
    onDestroy(){
        MainFacade.getInstance().removeMediator(IndexSceneMediator.NAME);
    }
    

}

