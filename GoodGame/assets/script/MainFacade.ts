import KYPureFacade from "./KYCreatorSDK/DesignPatterns/KYPrueMVC/Core/KYPureFacade";
import MainProxy from "./MainProxy";

export default class MainFacade extends KYPureFacade {

    
    static NAME = 'MainFacade';
    public constructor(key?: string) {
        super(MainFacade.NAME);
        //註冊控制事件
        this.initialCommand();
        //註冊資料處理項目
        this.initialProxy();
    }

    public static getInstance(): MainFacade {
        return super.getInstance(MainFacade.NAME);
    }

    initialCommand() {
        
        // this.registerCommand(CommandMap.UPDATE_TIME, GameCommand);
        // this.registerCommand(CommandMap.CHOOSE_STAGE, GameCommand);
        // this.registerCommand(CommandMap.DESTROY_SQUARE, GameCommand);
    }
    initialProxy() {
        
        this.registerProxy(new MainProxy());


    }

}
