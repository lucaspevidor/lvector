/**
 * Represents a 2D vector with x and y components.
 */
export class Vector2 {
    /**
     * Creates a new Vector2 instance.
     * @param x - The x component of the vector
     * @param y - The y component of the vector
     */
    constructor(
        public x: number,
        public y: number
    ) { };

    /**
     * Returns a new Vector2 instance with x component set to 1 and y set to 0.
     */
    public static unit(): Vector2 {
        return new Vector2(1, 0);
    }

    /**
     * Returns a new Vector2 instance with x and y components set to 0.
     */
    public static zero(): Vector2 {
        return new Vector2(0, 0);
    }

    /**
     * Adds another vector to this vector.
     * @param other - The vector to add to this vector
     * @returns A new Vector2 instance representing the result of the addition.
     */
    public add(other: Vector2): Vector2;

    /**
     * Adds the specified x and y values to this vector.
     * @param x - The value to add to the x component of this vector.
     * @param y - The value to add to the y component of this vector.
     * @returns A new Vector2 instance representing the result of the addition.
     */
    public add(x: number, y: number): Vector2;

    /**
     * Adds another vector or x, y values to this vector.
     * @param arg1 - The vector or x component to add.
     * @param arg2 - The y component to add (if arg1 is a number).
     * @returns A new Vector2 instance representing the result of the addition.
     * @throws {Error} If the arguments are invalid.
     */
    public add(arg1: Vector2 | number, arg2?: number): Vector2 {
        if (arg1 instanceof Vector2) {
            return new Vector2(this.x + arg1.x, this.y + arg1.y);
        } else if (typeof arg1 === "number" && typeof arg2 === "number") {
            return new Vector2(this.x + arg1, this.y + arg2);
        } else {
            throw new Error("Invalid arguments");
        }
    }

    /**
     * Subtracts another vector from this vector.
     * @param other - The vector to subtract from this vector
     * @returns A new Vector2 instance representing the result of the subtraction.
     */
    public subtract(other: Vector2): Vector2;

    /**
     * Subtracts the specified x and y values from this vector.
     * @param x - The value to subtract from the x component of this vector.
     * @param y - The value to subtract from the y component of this vector.
     * @returns A new Vector2 instance representing the result of the subtraction.
     */
    public subtract(x: number, y: number): Vector2;

    /**
     * Subtracts another vector or x, y values from this vector.
     * @param arg1 - The vector or x component to subtract.
     * @param arg2 - The y component to subtract (if arg1 is a number).
     * @returns A new Vector2 instance representing the result of the subtraction.
     * @throws {Error} If the arguments are invalid.
     */
    public subtract(a1: Vector2 | number, a2?: number): Vector2 {
        if (a1 instanceof Vector2) {
            return new Vector2(this.x - a1.x, this.y - a1.y);
        } else if (typeof a1 === "number" && typeof a2 === "number") {
            return new Vector2(this.x - a1, this.y - a2);
        } else {
            throw new Error("Invalid arguments");
        }
    }

    /**
     * Multiplies this vector by another vector.
     * @param other - The vector to multiply this vector by.
     * @returns A new Vector2 instance representing the result of the multiplication.
     */
    public multiply(other: Vector2): Vector2 {
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
    public divide(other: Vector2): Vector2 {
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
    public scale(factor: number): Vector2 {
        return new Vector2(this.x * factor, this.y * factor);
    }

    /**
     * Checks if this vector is approximately equal to another vector within a specified epsilon.
     * @param other - The vector to compare with.
     * @param ep - The epsilon value (maximum allowed difference).
     * @returns `true` if the vectors are approximately equal, `false` otherwise.
     */
    public isEqual(other: Vector2, ep: number = 0.001): boolean {
        return (
            Math.abs(this.x - other.x) < ep &&
            Math.abs(this.y - other.y) < ep
        );
    }

    /**
     * Calculates the magnitude (length) of this vector.
     * @returns The magnitude of the vector.
     */
    public mag(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    /**
     * Calculates the dot product of this vector and another vector.
     * @param other - The vector to compute the dot product with.
     * @returns The dot product of the two vectors.
     */
    public dot(other: Vector2) {
        return this.x * other.x + this.y * other.y;
    }

    /**
     * Moves this vector towards a destination vector with interpolation.
     * @param destination - The destination vector.
     * @param interp - The interpolation parameter (between 0 and 1).
     * @returns A new Vector2 instance representing the interpolated vector.
     * @throws {Error} If the interpolation parameter is out of range.
     */
    public moveTo(destination: Vector2, interp: number) {
        if (interp < 0 || interp > 1) {
            throw new Error("Interpolation must be between 0 and 1");
        }

        return destination.subtract(this).scale(interp).add(this);
    }

    /**
     * Calculates the angle in radians between this vector and the positive x-axis.
     * @returns The angle in radians.
     */
    public angle(): number {
        return Math.atan(this.y / this.x);
    }

    /**
     * Calculates the angle in degrees between this vector and the positive x-axis.
     * @returns The angle in degrees.
     */
    public angleDeg(): number {
        return this.angle() * 180 / Math.PI;
    }

    /**
     * Returns a new vector that is a normalized (unit) version of this vector.
     * @returns A new Vector2 instance representing the normalized vector.
     */
    public normalize(): Vector2 {
        const mag = this.mag();
        return new Vector2(this.x / mag, this.y / mag);
    }

    /**
     * Rotates this vector 90 degrees counterclockwise.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    public r90deg(): Vector2 {
        return new Vector2(-this.y, this.x);
    }

    /**
     * Rotates this vector 180 degrees.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    public r180deg(): Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    /**
     * Rotates this vector 270 degrees counterclockwise.
     * @returns A new Vector2 instance representing the rotated vector.
     */
    public r270deg(): Vector2 {
        return new Vector2(this.y, -this.x);
    }

    /**
     * Creates a copy of this vector.
     * @returns A new Vector2 instance with the same x and y components.
     */
    public copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }
}
