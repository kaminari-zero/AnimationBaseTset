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
    /** 一个可以跟随触摸方向旋转的箭头 */
    var Arrorw = (function (_super) {
        __extends(Arrorw, _super);
        function Arrorw() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
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
        Arrorw.prototype.init = function () {
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
        };
        return Arrorw;
    }(egret.Sprite));
    UI.Arrorw = Arrorw;
    __reflect(Arrorw.prototype, "UI.Arrorw");
})(UI || (UI = {}));
//# sourceMappingURL=Arrow.js.map