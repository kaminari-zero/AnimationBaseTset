module UI {

	/** 一个可以跟随触摸方向旋转的箭头 */
	export class Arrorw extends egret.Sprite {
		public constructor() {
			super();
			this.init();

			// this.addEventListener(egret.Event.ADDED, () => {
			// 	egret.log("egret.Event.ADDED");
			// 	//触摸移动:
			// 	if(this.parent){
			// 		this.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
			// 		this.parent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
			// 		this.parent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
			// 	}
			// 	//在这里直接做好初始化工作
			// 	egret.log("width,height:",this);
			// 	this.x = this.stage.stageWidth /2;
			// 	this.y = this.stage.stageHeight /2;

			// 	//在此将onEnterFrame注入入父节点中
			// }, this);
		}

		public init() {
			this.graphics.lineStyle(1, 0, 1);
			this.graphics.beginFill(0xffff00);
			this.graphics.moveTo(-50, -25);
			this.graphics.lineTo(0, -25);
			this.graphics.lineTo(0, -50);
			this.graphics.lineTo(50, 0);
			this.graphics.lineTo(0, 50);
			this.graphics.lineTo(0, 25);
			this.graphics.lineTo(-50, 25);
			this.graphics.lineTo(-50, -25);
			this.graphics.endFill();

			//默认不启动触摸
			this.touchEnabled = true;
		}

		// private onTouchMove(event: egret.TouchEvent) {
		// 	let dx = event.stageX - this.x;
		// 	let dy = event.stageY - this.y;
		// 	egret.log("onEnterFrame have:", event.stageX, event.stageY);
		// 	let radians: number = Math.atan2(dy, dx);
		// 	this.rotation = radians * 180 / Math.PI;
		// }

		// public onEnterFrame(event:egret.Event){
		// 	// let dx = event.stageX - this.arrow.x;
		// 	// let dy = event.stageY - this.arrow.y;
		// 	// egret.log("onEnterFrame have:",event.stageX,event.stageY);
		// 	// let radians:number = Math.atan2(dy,dx);
		// 	// this.arrow.rotation = radians * 180 / Math.PI;
		// }

		// private onTouchStart() {
		// 	egret.log("onTouchStart");
		// }
		// private onTouchTap() {
		// 	egret.log("onTouchTap");
		// }
	}
}