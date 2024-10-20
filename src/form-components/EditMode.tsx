import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                {" "}
                {/* Add the form-switch class here */}
                Edit Mode:
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
            </label>
            {isEditMode ?
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}
