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
    var Point = (function (_super) {
        __extends(Point, _super);
        function Point(color) {
            if (color === void 0) { color = 0xff0000; }
            var _this = _super.call(this) || this;
            // this.radius = radius;
            _this.color = color;
            _this.init();
            return _this;
        }
        Point.prototype.init = function () {
            this.graphics.beginFill(this.color);
            this.graphics.drawRect(-2, -2, 4, 4);
            this.graphics.endFill();
            this.x = this.stage.stageWidth / 2;
            this.y = this.stage.stageHeight / 2;
        };
        /** 利用毕达哥拉斯定理(勾股定理)求亮点之间的距离 */
        Point.prototype.updata = function (x, y) {
            this.graphics.clear();
            this.graphics.lineStyle(1, 0, 1);
            this.graphics.moveTo(this.x, this.y);
            this.graphics.lineTo(x, y);
            var dx = this.x - x;
            var dy = this.y - y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            return dist;
        };
        Point.prototype.updata2 = function () {
        };
        return Point;
    }(egret.Sprite));
    UI.Point = Point;
    __reflect(Point.prototype, "UI.Point");
})(UI || (UI = {}));
//# sourceMappingURL=Point.js.map