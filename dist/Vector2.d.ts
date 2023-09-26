export declare class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static unit(): Vector2;
    static zero(): Vector2;
    add(other: Vector2): Vector2;
    add(x: number, y: number): Vector2;
    subtract(other: Vector2): Vector2;
    subtract(x: number, y: number): Vector2;
    multiply(other: Vector2): Vector2;
    divide(other: Vector2): Vector2;
    scale(factor: number): Vector2;
    isEqual(other: Vector2): boolean;
    mag(): number;
    angle(): number;
    angleDeg(): number;
    normalize(): Vector2;
    r90deg(): Vector2;
    r180deg(): Vector2;
    r270deg(): Vector2;
    copy(): Vector2;
}
