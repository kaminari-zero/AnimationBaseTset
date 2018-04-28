module UI {
    export class testBall extends UIComponent {
        public constructor(target:egret.DisplayObject){
            super(target);
        }
        /** 角度 */
        private angle:number = 0;
        /** 波的范围 */
        private range:number = .5;
        /** 每一帧的增加值(速度) */
        private speed:number = .4;

        //线性垂直运动
        /** x位置的速度 */
        private xspeed:number = 1;
        /** 有位置的速度 */
        private yspeed:number = .5;

        onAddEd(event: egret.Event){
            let ball = this.getTarget();
            //固定在一个水平位置
            ball.x = ball.stage.stageWidth/2;
            ball.y = ball.stage.stageHeight/2
        }

        init(){
            super.init();
        }

        onEnterFrame(event: egret.Event){
            this.run5();
        }

        /** 光滑的上下运动 */
        private run1(){
            let ball = this.getTarget();
            if(ball && ball.parent){
                //设置正弦波的值(用的是弧度计算)
                ball.y = ball.stage.stageHeight/2+Math.sin(this.angle)*this.range;
                this.angle += this.speed;
                //同时设置x的位置,让其在
                // ball.x = ball.x > ball.stage.stageWidth/2+Math.PI*1000?ball.stage.stageWidth/2:ball.x + 1;
                // egret.log("",ball.x,ball.y);

            }
        }
        /** 垂直的线性运动 */
        private run2(){
            let ball = this.getTarget();
            if(ball && ball.parent){
                //设置正弦波的值(用的是弧度计算)
                ball.y = ball.stage.stageHeight/2+Math.sin(this.angle)*this.range;
                //线性垂直运动
                ball.x += this.xspeed;
                this.angle += this.yspeed;
            }
        }

        /** 脉冲运动的中心点 */
        private centerScale:number = 1;
        /** 脉冲运动 */
        private run3(){
            let ball = this.getTarget();
            if(ball && ball.parent){
                //设置正弦波的值(用的是弧度计算)
                ball.scaleX = ball.scaleY = this.centerScale + Math.sin(this.angle) *this.range;
                this.angle += this.speed;
            }
        }

        /** 圆心的x */
        private centerX:number = 200;
        /** 圆心的y */
        private centerY:number = 200;
        /** 半径 */
        private radius:number = 50;
        /** 圆形运动(利用三角函数画圆) */
        private run4(){
            let ball = this.getTarget();
            if(ball && ball.parent){
                //设置正弦波的值(用的是弧度计算)
                ball.x = this.centerX + Math.sin(this.angle) * this.radius;
                ball.y = this.centerY + Math.cos(this.angle) * this.radius;
                this.angle += this.speed;
            }
        }

        /** 椭圆的长轴 */
        private radiusX:number = 200;
        /** 椭圆的短轴 */
        private radiusY:number = 100;
        /** 椭圆形运动 */
        private run5(){
            let ball = this.getTarget();
            if(ball && ball.parent){
                //设置正弦波的值(用的是弧度计算)
                ball.x = this.centerX + Math.sin(this.angle) * this.radiusX;
                ball.y = this.centerY + Math.cos(this.angle) * this.radiusY;
                this.angle += this.speed;
            }
        }
    }
}