var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var UI;
(function (UI) {
    var testBall = (function (_super) {
        __extends(testBall, _super);
        function testBall(target) {
            var _this = _super.call(this, target) || this;
            /** 角度 */
            _this.angle = 0;
            /** 波的范围 */
            _this.range = .5;
            /** 每一帧的增加值(速度) */
            _this.speed = .4;
            //线性垂直运动
            /** x位置的速度 */
            _this.xspeed = 1;
            /** 有位置的速度 */
            _this.yspeed = .5;
            /** 脉冲运动的中心点 */
            _this.centerScale = 1;
            /** 圆心的x */
            _this.centerX = 200;
            /** 圆心的y */
            _this.centerY = 200;
            /** 半径 */
            _this.radius = 50;
            /** 椭圆的长轴 */
            _this.radiusX = 200;
            /** 椭圆的短轴 */
            _this.radiusY = 100;
            return _this;
        }
        testBall.prototype.onAddEd = function (event) {
            var ball = this.getTarget();
            //固定在一个水平位置
            ball.x = ball.stage.stageWidth / 2;
            ball.y = ball.stage.stageHeight / 2;
        };
        testBall.prototype.init = function () {
            _super.prototype.init.call(this);
        };
        testBall.prototype.onEnterFrame = function (event) {
            this.run5();
        };
        /** 光滑的上下运动 */
        testBall.prototype.run1 = function () {
            var ball = this.getTarget();
            if (ball && ball.parent) {
                //设置正弦波的值(用的是弧度计算)
                ball.y = ball.stage.stageHeight / 2 + Math.sin(this.angle) * this.range;
                this.angle += this.speed;
                //同时设置x的位置,让其在
                // ball.x = ball.x > ball.stage.stageWidth/2+Math.PI*1000?ball.stage.stageWidth/2:ball.x + 1;
                // egret.log("",ball.x,ball.y);
            }
        };
        /** 垂直的线性运动 */
        testBall.prototype.run2 = function () {
            var ball = this.getTarget();
            if (ball && ball.parent) {
                //设置正弦波的值(用的是弧度计算)
                ball.y = ball.stage.stageHeight / 2 + Math.sin(this.angle) * this.range;
                //线性垂直运动
                ball.x += this.xspeed;
                this.angle += this.yspeed;
            }
        };
        /** 脉冲运动 */
        testBall.prototype.run3 = function () {
            var ball = this.getTarget();
            if (ball && ball.parent) {
                //设置正弦波的值(用的是弧度计算)
                ball.scaleX = ball.scaleY = this.centerScale + Math.sin(this.angle) * this.range;
                this.angle += this.speed;
            }
        };
        /** 圆形运动(利用三角函数画圆) */
        testBall.prototype.run4 = function () {
            var ball = this.getTarget();
            if (ball && ball.parent) {
                //设置正弦波的值(用的是弧度计算)
                ball.x = this.centerX + Math.sin(this.angle) * this.radius;
                ball.y = this.centerY + Math.cos(this.angle) * this.radius;
                this.angle += this.speed;
            }
        };
        /** 椭圆形运动 */
        testBall.prototype.run5 = function () {
            var ball = this.getTarget();
            if (ball && ball.parent) {
                //设置正弦波的值(用的是弧度计算)
                ball.x = this.centerX + Math.sin(this.angle) * this.radiusX;
                ball.y = this.centerY + Math.cos(this.angle) * this.radiusY;
                this.angle += this.speed;
            }
        };
        return testBall;
    }(UI.UIComponent));
    UI.testBall = testBall;
    __reflect(testBall.prototype, "UI.testBall");
})(UI || (UI = {}));
//# sourceMappingURL=三角函数波的利用.js.map