import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    // Ensure initial values are not the same
    while (leftDie === rightDie) {
        setRightDie(d6());
    }

    const rollLeftDie = () => {
        setLeftDie(d6());
    };

    const rollRightDie = () => {
        setRightDie(d6());
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            <div>
                {leftDie === rightDie && leftDie === 1 ?
                    <p>Lose</p>
                : leftDie === rightDie ?
                    <p>Win</p>
                :   null}
            </div>
        </div>
    );
}
