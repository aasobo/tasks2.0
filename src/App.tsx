import React from "react";
import "./App.css";
import myImage from "/Users/angelasobo/Desktop/tasks2.0/src/celtics.jpeg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Application</h1>
                Hello World! ANGEL ASOBO UD CISC275 with React Hooks and
                TypeScript
            </header>
            <img src={myImage} alt="2024 Boston Celtics" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. \
            </p>
            {/* Added List */}
            <ul>
                <li>First game</li>
                <li>Second game</li>
                <li>Third game</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        >
                            Column 1
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        >
                            Column 2
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        //Angel Asobo
    );
}

export default App;
