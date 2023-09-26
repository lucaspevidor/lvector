/**
 * Represents a 2D vector with x and y components.
 */
export declare class Vector2 {
    x: number;
    y: number;
    /**
     * Creates a new Vector2 instance.
     * @param x - The x component of the vector
     * @param y - The y component of the vector
     */
    constructor(x: number, y: number);
    /**
     * Returns a new Vector2 instance with x component set to 1 and y set to 0.
     */
    static unit(): Vector2;
    /**
     * Returns a new Vector2 instance with x and y components set to 0.
     */
    static zero(): Vector2;
    /**
     * Adds another vector to this vector.
     * @param other - The vector to add to this vector
     * @returns A new Vector2 instance representing the result of the addition.
     */
    add(other: Vector2): Vector2;
    /**
     * Adds the specified x and y values to this vector.
     * @param x - The value to add to the x component of this vector.
     * @param y - The value to add to the y component of this vector.
     * @returns A new Vector2 instance representing the result of the addition.
     */
    add(x: number, y: number): Vector2;
    /**
     * Subtracts another vector from this vector.
     * @param other - The vector to subtract from this vector
     * @returns A new Vector2 instance representing the result of the subtraction.
     */
    subtract(other: Vector2): Vector2;
    /**
     * Subtracts the specified x and y values from this vector.
     * @param x - The value to subtract from the x component of this vector.
     * @param y - The value to subtract from the y component of this vector.
     * @returns A new Vector2 instance representing the result of the subtraction.
     */
    subtract(x: number, y: number): Vector2;
    /**
     * Multiplies this vector by another vector.
     * @param other - The vector to multiply this vector by.
     * @returns A new Vector2 instance representing the result of the multiplication.
     */
    multiply(other: Vector2): Vector2;
    /**
     * Divides this vector by another vector.
     * @param other - The vector to divide this vector by.
     * @returns A new Vector2 instance representing the result of the division.
     */
    divide(other: Vector2): Vector2;
    /**
     * Scales this vector by a factor.
     * @param factor - The scaling factor.
     * @returns A new Vector2 instance representing the scaled vector.
     */
    scale(factor: number): Vector2;
    /**
     * Checks if this vector is approximately equal to another vector within a specified epsilon.
     * @param other - The vector to compare with.
     * @param ep - The epsilon value (maximum allowed difference).
     * @returns `true` if the vectors are approximately equal, `false` otherwise.
     */
    isEqual(other: Vector2, ep?: number): boolean;
    /**
     * Calculates the magnitude (length) of this vector.
     * @returns The magnitude of the vector.
     */
    mag(): number;
    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The vector to compute the dot product with.
     * @returns The dot product of the two vectors.
     */
    dot(other: Vector2): number;
    /**
     * Moves this vector towards a destination vector with interpolation.
     * @param destination - The destination vector.
     * @param interp - The interpolation parameter (between 0 and 1).
     * @returns A new Vector2 instance representing the interpolated vector.
     * @throws {Error} If the interpolation parameter is out of range.
     */
    moveTo(destination: Vector2, interp: number): Vector2;
    /**
     * Calculates the angle in radians between this vector and the positive x-axis.
     * @returns The angle in radians.
     */
    angle(): number;
    /**
     * Calculates the angle in degrees between this vector and the positive x-axis.
     * @returns The angle in degrees.
     */
    angleDeg(): number;
    /**
     * Returns a new vector that is a normalized (unit) version of this vector.
     * @returns A new Vector2 instance representing the normalized vector.
     */
    normalize(): Vector2;
    /**
     * Rotates this vector 90 degrees counterclockwise.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    r90deg(): Vector2;
    /**
     * Rotates this vector 180 degrees.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    r180deg(): Vector2;
    /**
     * Rotates this vector 270 degrees counterclockwise.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    r270deg(): Vector2;
    /**
     * Creates a copy of this vector.
     * @returns A new Vector2 instance with the same x and y components.
     */
    copy(): Vector2;
}
