"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            return Number((Math.PI * shape.radius * shape.radius).toFixed(2));
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
    };
    const resultOfRectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    const resultOfCircleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(resultOfRectangleArea);
    console.log(resultOfCircleArea);
}
