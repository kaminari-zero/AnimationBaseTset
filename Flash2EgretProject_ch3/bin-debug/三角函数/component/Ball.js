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
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball(radius, color) {
            if (radius === void 0) { radius = 40; }
            if (color === void 0) { color = 0xff0000; }
            var _this = _super.call(this) || this;
            _this.radius = radius;
            _this.color = color;
            _this.init();
            return _this;
        }
        Ball.prototype.init = function () {
            this.graphics.beginFill(this.color);
            this.graphics.drawCircle(0, 0, this.radius);
            this.graphics.endFill();
        };
        return Ball;
    }(egret.Sprite));
    UI.Ball = Ball;
    __reflect(Ball.prototype, "UI.Ball");
})(UI || (UI = {}));
//# sourceMappingURL=Ball.js.map