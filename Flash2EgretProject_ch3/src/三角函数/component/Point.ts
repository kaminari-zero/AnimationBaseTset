module UI {
	export class Point extends egret.Sprite {
		public constructor(color:number=0xff0000) {
			super();
			// this.radius = radius;
			this.color = color;
			this.init();
		}

		private radius:number;
		private color:number;
		
		public init():void {
			this.graphics.beginFill(this.color);
			this.graphics.drawRect(-2,-2,4,4);
			this.graphics.endFill();

            this.x = this.stage.stageWidth/2;
            this.y = this.stage.stageHeight/2;
		}

        /** 利用毕达哥拉斯定理(勾股定理)求亮点之间的距离 */
        public updata(x:number,y:number){
            this.graphics.clear();
            this.graphics.lineStyle(1,0,1);
            this.graphics.moveTo(this.x,this.y);
            this.graphics.lineTo(x,y);
            let dx = this.x - x;
            let dy = this.y - y;
            let dist = Math.sqrt(dx*dx+dy*dy);
            return dist;
		}

		public updata2(){
            
        }
	}
}