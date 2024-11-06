"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
    };
    const result = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    console.log(result);
}
