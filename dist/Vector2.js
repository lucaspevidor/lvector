"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    static unit() {
        return new Vector2(1, 0);
    }
    static zero() {
        return new Vector2(0, 0);
    }
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
    multiply(other) {
        const mag = this.mag() * other.mag();
        const angle = this.angle() + other.angle();
        const y = Math.sin(angle) * mag;
        const x = Math.cos(angle) * mag;
        return new Vector2(x, y);
    }
    divide(other) {
        const mag = this.mag() / other.mag();
        const angle = this.angle() - other.angle();
        const y = Math.sin(angle) * mag;
        const x = Math.cos(angle) * mag;
        return new Vector2(x, y);
    }
    scale(factor) {
        return new Vector2(this.x * factor, this.y * factor);
    }
    isEqual(other) {
        return (Math.abs(this.x - other.x) < 0.001 &&
            Math.abs(this.y - other.y) < 0.001);
    }
    mag() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    angle() {
        return Math.atan(this.y / this.x);
    }
    angleDeg() {
        return this.angle() * 180 / Math.PI;
    }
    normalize() {
        const mag = this.mag();
        return new Vector2(this.x / mag, this.y / mag);
    }
    r90deg() {
        return new Vector2(-this.y, this.x);
    }
    r180deg() {
        return new Vector2(-this.x, -this.y);
    }
    r270deg() {
        return new Vector2(this.y, -this.x);
    }
    copy() {
        return new Vector2(this.x, this.y);
    }
}
exports.Vector2 = Vector2;
