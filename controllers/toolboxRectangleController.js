﻿class ToolboxRectangleController extends ToolboxShapeController {
    constructor(mouseController, view, model) {
        super(mouseController, view, model);
    }

    createElementAt(x, y) {
        var el = Helpers.createElement('rect', { x: x - 30, y: y - 30, width: 60, height: 60, fill: "#FFFFFF", stroke: "black", "stroke-width": 1 });
        var model = new Model();
        model._x = x - 30;
        model._y = y - 30;
        model._width = 60;
        model._height = 60;
        var view = new ShapeView(el, model);
        var controller = new RectangleController(this.mouseController, view, model);

        return { el: el, model: model, view: view, controller: controller };
    }
}