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
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
    }

    const result: number | undefined = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    console.log(result);

}