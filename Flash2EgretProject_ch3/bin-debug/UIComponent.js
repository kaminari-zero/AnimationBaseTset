var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var UIComponent = (function () {
        function UIComponent(target) {
            this._target = target;
            this.init();
            this.getTarget().addEventListener(egret.Event.ADDED, this.onAddEd, this);
            this.getTarget().addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }
        UIComponent.prototype.setTarget = function (any) {
            this._target = any;
        };
        UIComponent.prototype.getTarget = function () {
            return this._target;
        };
        UIComponent.prototype.init = function () {
            this.setTarget(this._target);
        };
        UIComponent.prototype.onEnterFrame = function (event) {
        };
        return UIComponent;
    }());
    UI.UIComponent = UIComponent;
    __reflect(UIComponent.prototype, "UI.UIComponent");
})(UI || (UI = {}));
//# sourceMappingURL=UIComponent.js.map