module UI {
	export class Ball extends egret.Sprite {
		public constructor(radius:number=40, color:number=0xff0000) {
			super();
			this.radius = radius;
			this.color = color;
			this.init();
		}

		private radius:number;
		private color:number;
		
		public init():void {
			this.graphics.beginFill(this.color);
			this.graphics.drawCircle(0, 0, this.radius);
			this.graphics.endFill();
		}
	}
}