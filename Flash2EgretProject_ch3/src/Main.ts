class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            context.onUpdate = () => {
            }
        })
        
        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    // private arrow:UI.Arrorw;
    private onEnterFrame(event:egret.TouchEvent){
    }

    private onTouchMove(event:egret.TouchEvent){
        egret.log("onTouchMove");
    }

    private onTouchStart(){
        egret.log("onTouchStart");
    }
    private onTouchTap(){
        egret.log("onTouchTap");
    }

    private init(){
        //箭头
        let arrowTest = new UI.testArrorw(new UI.Arrorw());
        //球
        // let arrowTest = new UI.testBall(new UI.Ball());
        this.addChild(arrowTest.getTarget());
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene 
     */
    private createGameScene() {
        this.width = this.stageW = this.stage.stageWidth;
        this.height = this.stageH = this.stage.stageHeight;

        this.init();

        Test.TestBitCalr.judgeNumberOddOrEven(11);
        Test.TestBitCalr.judgeNumberOddOrEven(100);

        Test.TestBitCalr.changeNum2(99,500);
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    public stageW:number;
    public stageH:number;
    // protected createChildren(): void {
    //     egret.log("egret.DisplayObjectContainer default exist");
    // }
}