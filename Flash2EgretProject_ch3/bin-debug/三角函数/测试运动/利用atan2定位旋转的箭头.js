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
    var testArrorw = (function (_super) {
        __extends(testArrorw, _super);
        function testArrorw(target) {
            return _super.call(this, target) || this;
            // this.getTarget().addEventListener(egret.Event.ADDED,this.onAddEd,this);
        }
        testArrorw.prototype.onAddEd = function () {
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
        };
        testArrorw.prototype.init = function () {
            _super.prototype.init.call(this);
            this.arrow = this.getTarget();
        };
        testArrorw.prototype.onTouchMove = function (event) {
            var dx = event.stageX - this.arrow.x;
            var dy = event.stageY - this.arrow.y;
            egret.log("onEnterFrame have:", event.stageX, event.stageY);
            var radians = Math.atan2(dy, dx);
            this.arrow.rotation = radians * 180 / Math.PI;
        };
        testArrorw.prototype.onEnterFrame = function (event) {
            // let dx = event.stageX - this.arrow.x;
            // let dy = event.stageY - this.arrow.y;
            // egret.log("onEnterFrame have:",event.stageX,event.stageY);
            // let radians:number = Math.atan2(dy,dx);
            // this.arrow.rotation = radians * 180 / Math.PI;
        };
        testArrorw.prototype.onTouchStart = function () {
            egret.log("onTouchStart");
        };
        testArrorw.prototype.onTouchTap = function () {
            egret.log("onTouchTap");
        };
        return testArrorw;
    }(UI.UIComponent));
    UI.testArrorw = testArrorw;
    __reflect(testArrorw.prototype, "UI.testArrorw");
})(UI || (UI = {}));
//# sourceMappingURL=利用atan2定位旋转的箭头.js.map