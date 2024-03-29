#!/usr/bin/node
export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(newSqft) {
        if (typeof newSqft === 'number') {
            this._sqft = newSqft;
        } else {
            throw new Error('Sqft must be a number');
        }
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}