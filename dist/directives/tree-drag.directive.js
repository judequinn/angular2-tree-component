"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tree_dragged_element_model_1 = require("../models/tree-dragged-element.model");
var DRAG_OVER_CLASS = 'is-dragging-over';
var TreeDragDirective = (function () {
    function TreeDragDirective(el, renderer, treeDraggedElement) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
    }
    TreeDragDirective.prototype.ngDoCheck = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? "true" : "false");
    };
    TreeDragDirective.prototype.onDragStart = function (ev) {
        var _this = this;
        // setting the data is required by firefox
        ev.dataTransfer.setData("text", ev.target.id);
        setTimeout(function () { return _this.treeDraggedElement.set(_this.draggedElement); }, 30);
    };
    TreeDragDirective.prototype.onDragEnd = function () {
        this.treeDraggedElement.set(null);
    };
    return TreeDragDirective;
}());
__decorate([
    core_1.Input('treeDrag'),
    __metadata("design:type", Object)
], TreeDragDirective.prototype, "draggedElement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TreeDragDirective.prototype, "treeDragEnabled", void 0);
__decorate([
    core_1.HostListener('dragstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeDragDirective.prototype, "onDragStart", null);
__decorate([
    core_1.HostListener('dragend'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeDragDirective.prototype, "onDragEnd", null);
TreeDragDirective = __decorate([
    core_1.Directive({
        selector: '[treeDrag]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, tree_dragged_element_model_1.TreeDraggedElement])
], TreeDragDirective);
exports.TreeDragDirective = TreeDragDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUE0RztBQUM1RyxtRkFBMEU7QUFFMUUsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUM7QUFLM0MsSUFBYSxpQkFBaUI7SUFJNUIsMkJBQW9CLEVBQWMsRUFBVSxRQUFrQixFQUFVLGtCQUFxQztRQUF6RixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFDN0csQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRXNDLHVDQUFXLEdBQVgsVUFBWSxFQUFFO1FBQXJELGlCQUtDO1FBSkMsMENBQTBDO1FBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQWhELENBQWdELEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUV3QixxQ0FBUyxHQUFUO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXBCb0I7SUFBbEIsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7eURBQWdCO0FBQ3pCO0lBQVIsWUFBSyxFQUFFOzswREFBaUI7QUFTYztJQUF0QyxtQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O29EQUtyQztBQUV3QjtJQUF4QixtQkFBWSxDQUFDLFNBQVMsQ0FBQzs7OztrREFFdkI7QUFwQlUsaUJBQWlCO0lBSDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtLQUN2QixDQUFDO3FDQUt3QixpQkFBVSxFQUFvQixlQUFRLEVBQTZCLCtDQUFrQjtHQUpsRyxpQkFBaUIsQ0FxQjdCO0FBckJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBSZW5kZXJlciwgRWxlbWVudFJlZiwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZURyYWdnZWRFbGVtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsJztcblxuY29uc3QgRFJBR19PVkVSX0NMQVNTID0gJ2lzLWRyYWdnaW5nLW92ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdHJlZURyYWddJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmVlRHJhZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBASW5wdXQoJ3RyZWVEcmFnJykgZHJhZ2dlZEVsZW1lbnQ7XG4gIEBJbnB1dCgpIHRyZWVEcmFnRW5hYmxlZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSB0cmVlRHJhZ2dlZEVsZW1lbnQ6VHJlZURyYWdnZWRFbGVtZW50KSB7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdnYWJsZScsIHRoaXMudHJlZURyYWdFbmFibGVkID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgb25EcmFnU3RhcnQoZXYpIHtcbiAgICAvLyBzZXR0aW5nIHRoZSBkYXRhIGlzIHJlcXVpcmVkIGJ5IGZpcmVmb3hcbiAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KHRoaXMuZHJhZ2dlZEVsZW1lbnQpLCAzMCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW5kJykgb25EcmFnRW5kKCkge1xuICAgIHRoaXMudHJlZURyYWdnZWRFbGVtZW50LnNldChudWxsKTtcbiAgfVxufVxuIl19