import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<string>("🎄");

    const nextHolidayAlphabetically: Record<string, string> = {
        "🎄": "🎃",
        "🎃": "🎆",
        "🎆": "🎉",
        "🎉": "🦃",
        "🦃": "🎄",
    };

    const nextHolidayByYear: Record<string, string> = {
        "🎄": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
        "🦃": "🎉",
        "🎉": "🎄",
    };

    const advanceByAlphabet = () => {
        setCurrentHoliday(nextHolidayAlphabetically[currentHoliday]);
    };

    const advanceByYear = () => {
        setCurrentHoliday(nextHolidayByYear[currentHoliday]);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
