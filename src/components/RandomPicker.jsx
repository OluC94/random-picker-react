import { useState } from "react";
import { getRandomItem } from "../utils/getRandomItem";

export default function RandomPicker() {
    const [itemData, setItemData] = useState(
        "JavaScript\nPython\nPHP\nJava\nC#",
    );
    const [selectedItem, setSelectedItem] = useState("");

    function handleTextInput(event) {
        setItemData(event.target.value);
    }

    function handleRandomClicked() {
        const inputList = itemData.split("\n");
        setSelectedItem(getRandomItem(inputList));
    }

    return (
        <main>
            <h1>Random Picker</h1>

            <p>Choices:</p>

            <textarea
                value={itemData}
                onChange={handleTextInput}
                name="items"
                data-testid="input-area"
            />

            <button onClick={handleRandomClicked}>Random</button>

            {
                <h2 data-testid="selected-word">
                    {selectedItem || "Click the button"}
                </h2>
            }
        </main>
    );
}
