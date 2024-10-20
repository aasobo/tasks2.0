import React, { useState } from "react";

const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Yellow", value: "yellow" },
    { name: "Purple", value: "purple" },
    { name: "Orange", value: "orange" },
    { name: "Pink", value: "pink" },
    { name: "Brown", value: "brown" },
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0].value);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <div key={color.value}>
                    <input
                        type="radio"
                        id={color.value}
                        name="color"
                        value={color.value}
                        checked={selectedColor === color.value}
                        onChange={() => {
                            setSelectedColor(color.value);
                        }}
                    />
                    <label htmlFor={color.value}>{color.name}</label>
                </div>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: selectedColor,
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
