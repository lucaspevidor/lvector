"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
/**
 * Represents a 2D vector with x and y components.
 */
class Vector2 {
    /**
     * Creates a new Vector2 instance.
     * @param x - The x component of the vector
     * @param y - The y component of the vector
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    /**
     * Returns a new Vector2 instance with x component set to 1 and y set to 0.
     */
    static unit() {
        return new Vector2(1, 0);
    }
    /**
     * Returns a new Vector2 instance with x and y components set to 0.
     */
    static zero() {
        return new Vector2(0, 0);
    }
    /**
     * Adds another vector or x, y values to this vector.
     * @param arg1 - The vector or x component to add.
     * @param arg2 - The y component to add (if arg1 is a number).
     * @returns A new Vector2 instance representing the result of the addition.
     * @throws {Error} If the arguments are invalid.
     */
    add(arg1, arg2) {
        if (arg1 instanceof Vector2) {
            return new Vector2(this.x + arg1.x, this.y + arg1.y);
        }
        else if (typeof arg1 === "number" && typeof arg2 === "number") {
            return new Vector2(this.x + arg1, this.y + arg2);
        }
        else {
            throw new Error("Invalid arguments");
        }
    }
    /**
     * Subtracts another vector or x, y values from this vector.
     * @param arg1 - The vector or x component to subtract.
     * @param arg2 - The y component to subtract (if arg1 is a number).
     * @returns A new Vector2 instance representing the result of the subtraction.
     * @throws {Error} If the arguments are invalid.
     */
    subtract(a1, a2) {
        if (a1 instanceof Vector2) {
            return new Vector2(this.x - a1.x, this.y - a1.y);
        }
        else if (typeof a1 === "number" && typeof a2 === "number") {
            return new Vector2(this.x - a1, this.y - a2);
        }
        else {
            throw new Error("Invalid arguments");
        }
    }
    /**
     * Multiplies this vector by another vector.
     * @param other - The vector to multiply this vector by.
     * @returns A new Vector2 instance representing the result of the multiplication.
     */
    multiply(other) {
        const mag = this.mag() * other.mag();
        const angle = this.angle() + other.angle();
        const y = Math.sin(angle) * mag;
        const x = Math.cos(angle) * mag;
        return new Vector2(x, y);
    }
    /**
     * Divides this vector by another vector.
     * @param other - The vector to divide this vector by.
     * @returns A new Vector2 instance representing the result of the division.
     */
    divide(other) {
        const mag = this.mag() / other.mag();
        const angle = this.angle() - other.angle();
        const y = Math.sin(angle) * mag;
        const x = Math.cos(angle) * mag;
        return new Vector2(x, y);
    }
    /**
     * Scales this vector by a factor.
     * @param factor - The scaling factor.
     * @returns A new Vector2 instance representing the scaled vector.
     */
    scale(factor) {
        return new Vector2(this.x * factor, this.y * factor);
    }
    /**
     * Checks if this vector is approximately equal to another vector within a specified epsilon.
     * @param other - The vector to compare with.
     * @param ep - The epsilon value (maximum allowed difference).
     * @returns `true` if the vectors are approximately equal, `false` otherwise.
     */
    isEqual(other, ep = 0.001) {
        return (Math.abs(this.x - other.x) < ep &&
            Math.abs(this.y - other.y) < ep);
    }
    /**
     * Calculates the magnitude (length) of this vector.
     * @returns The magnitude of the vector.
     */
    mag() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The vector to compute the dot product with.
     * @returns The dot product of the two vectors.
     */
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    /**
     * Moves this vector towards a destination vector with interpolation.
     * @param destination - The destination vector.
     * @param interp - The interpolation parameter (between 0 and 1).
     * @returns A new Vector2 instance representing the interpolated vector.
     * @throws {Error} If the interpolation parameter is out of range.
     */
    moveTo(destination, interp) {
        if (interp < 0 || interp > 1) {
            throw new Error("Interpolation must be between 0 and 1");
        }
        return destination.subtract(this).scale(interp).add(this);
    }
    /**
     * Calculates the angle in radians between this vector and the positive x-axis.
     * @returns The angle in radians.
     */
    angle() {
        return Math.atan(this.y / this.x);
    }
    /**
     * Calculates the angle in degrees between this vector and the positive x-axis.
     * @returns The angle in degrees.
     */
    angleDeg() {
        return this.angle() * 180 / Math.PI;
    }
    /**
     * Returns a new vector that is a normalized (unit) version of this vector.
     * @returns A new Vector2 instance representing the normalized vector.
     */
    normalize() {
        const mag = this.mag();
        return new Vector2(this.x / mag, this.y / mag);
    }
    /**
     * Rotates this vector 90 degrees counterclockwise.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    r90deg() {
        return new Vector2(-this.y, this.x);
    }
    /**
     * Rotates this vector 180 degrees.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    r180deg() {
        return new Vector2(-this.x, -this.y);
    }
    /**
     * Rotates this vector 270 degrees counterclockwise.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    r270deg() {
        return new Vector2(this.y, -this.x);
    }
    /**
     * Creates a copy of this vector.
     * @returns A new Vector2 instance with the same x and y components.
     */
    copy() {
        return new Vector2(this.x, this.y);
    }
}
exports.Vector2 = Vector2;
