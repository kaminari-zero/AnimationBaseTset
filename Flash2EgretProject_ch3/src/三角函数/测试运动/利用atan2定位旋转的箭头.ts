module UI {
	/** 一个可以跟随触摸方向旋转的箭头 */
	export class testArrorw extends UIComponent {
		public constructor(target:egret.DisplayObject) {
			super(target);
			// this.getTarget().addEventListener(egret.Event.ADDED,this.onAddEd,this);
		}

		onAddEd() {
			egret.log("egret.Event.ADDED");
			//触摸移动:
			if (this.arrow.parent.parent) {
				this.arrow.parent.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
				this.arrow.parent.parent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
				this.arrow.parent.parent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
			}
			//在这里直接做好初始化工作
			egret.log("width,height:", this);
			this.arrow.x = this.arrow.stage.stageWidth / 2;
			this.arrow.y = this.arrow.stage.stageHeight / 2;
			//在此将onEnterFrame注入入父节点中
		}

		private arrow: UI.Arrorw;
		protected init(){
			super.init();
			this.arrow = <UI.Arrorw>this.getTarget();
		}

		private onTouchMove(event: egret.TouchEvent) {
			let dx = event.stageX - this.arrow.x;
			let dy = event.stageY - this.arrow.y;
			egret.log("onEnterFrame have:", event.stageX, event.stageY);
			let radians: number = Math.atan2(dy, dx);
			this.arrow.rotation = radians * 180 / Math.PI;
		}

		public onEnterFrame(event: egret.Event) {
			// let dx = event.stageX - this.arrow.x;
			// let dy = event.stageY - this.arrow.y;
			// egret.log("onEnterFrame have:",event.stageX,event.stageY);
			// let radians:number = Math.atan2(dy,dx);
			// this.arrow.rotation = radians * 180 / Math.PI;
		}

		private onTouchStart() {
			egret.log("onTouchStart");
		}
		private onTouchTap() {
			egret.log("onTouchTap");
		}
	}
}