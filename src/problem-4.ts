{
    type CircleArea = {
        shape: "circle";
        radius: number;
    };

    type RectangleArea = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    const calculateShapeArea = (shape: CircleArea | RectangleArea): number | undefined => {
        if (shape.shape === "circle") {
            return Number((Math.PI * shape.radius * shape.radius).toFixed(2));
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
    }

    const resultOfRectangleArea: number | undefined = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });

    const resultOfCircleArea: number | undefined = calculateShapeArea({ shape: "circle", radius: 5 });

    console.log(resultOfRectangleArea);

    console.log(resultOfCircleArea);

}