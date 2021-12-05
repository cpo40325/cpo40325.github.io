import Girl from "./base/Girl";
import KYPrueProxy from "./KYCreatorSDK/DesignPatterns/KYPrueMVC/Proxy/KYPureProxy";

export default class MainProxy extends KYPrueProxy {

    static NAME = 'MainProxy';


    money:number = 4000;

    lv = 1;
    exp = 0;

    girl:Girl[] = [];

    

    constructor(){
        super(MainProxy.NAME);
    }


}
