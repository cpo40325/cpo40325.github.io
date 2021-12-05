import SimpleCommand from "./KYCreatorSDK/DesignPatterns/KYPrueMVC/Command/SimpleCommand";
import KYPureNotification from "./KYCreatorSDK/DesignPatterns/KYPrueMVC/Observer/KYPureNotification";
import MainProxy from "./MainProxy";

export default class MainCommand extends SimpleCommand {

    public static NAME = 'GameCommand';

    public constructor(key: string) {
        super();
    }

    public execute(notification: KYPureNotification): void {


        const gameProxy = <MainProxy>this.getFacade().retrieveProxy(MainProxy.NAME);

        switch (notification.getName()) {
            // case CommandMap.UPDATE_TIME:
            //     gameProxy.updateTime(notification.getBody());
                // break;
           
        }
    }


}