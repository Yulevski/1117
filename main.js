var canvas = this.__canvas = new fabric.Canvas('canvas');
//create a rect object
var deleteIcon = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aZ3vzsdzZcLc0brFCniaRgHaE8%26pid%3DApi&f=1&ipt=f3e29572124fc6dd0bb0e678188ee3ca9a0251d2529b1a8d051a1b49598911b7&ipo=images";
var img = document.createElement('img');
img.src = deleteIcon;

fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = 'blue';
fabric.Object.prototype.cornerStyle = 'circle';

function Add() {
    console.log("function add");
var rect = new fabric.Rect({
  left: 100,
  top: 50,
  fill: 'yellow',
  width: 200,
  height: 100,
  objectCaching: false,
  stroke: 'lightgreen',
  strokeWidth: 4,
});

canvas.add(rect);
canvas.setActiveObject(rect);
}

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
x: 0.5,
y: -0.5,
offsetY: 16,
cursorStyle: 'pointer',
mouseUpHandler: deleteObject,
render: renderIcon,
cornerSize: 24
});

Add();

function deleteObject(eventData, transform) {
    console.log("delete");
    var target = transform.target;
    var canvas = target.canvas;
        canvas.remove(target);
    canvas.requestRenderAll();
}

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    console.log("renderIcon");
var size = this.cornerSize;
ctx.save();
ctx.translate(left, top);
ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
ctx.drawImage(img, -size/2, -size/2, size, size);
ctx.restore();
}
