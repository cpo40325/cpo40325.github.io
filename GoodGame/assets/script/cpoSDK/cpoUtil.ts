
export default class CpoUtil{


    start(){}
    /**
     * 
     * @param sprite 
     * @param url 
     */
    static loadSpriteFrame(sprite:cc.Sprite, url) {
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        cc.resources.load(url, cc.SpriteFrame, function (_err, f: cc.SpriteFrame) {
            sprite.spriteFrame = f;
        });
    }



    static goIndex(){

        cc.director.loadScene('IndexScene');
    }
    
}
