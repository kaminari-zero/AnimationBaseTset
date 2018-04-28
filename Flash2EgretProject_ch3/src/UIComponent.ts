module UI {
	export abstract class UIComponent {
		public constructor(target:egret.DisplayObject) {
            this._target = target;
			this.init();
            this.getTarget().addEventListener(egret.Event.ADDED,this.onAddEd,this);
            this.getTarget().addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
		}
        abstract onAddEd(event: egret.Event);

		_target: egret.DisplayObject;
		protected setTarget(any) {
			this._target = any;
		}
		public getTarget(): egret.DisplayObject {
			return this._target;
		}

		protected init() {
			this.setTarget(this._target);
		}
		protected onEnterFrame(event: egret.Event){

        }

        // public static regisetRun<T extends UIComponent>(target:egret.DisplayObject){
        //    // return new targetUIcom(target);
        // }
	}
}