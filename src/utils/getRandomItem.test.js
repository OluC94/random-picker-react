import { test, expect, describe } from "vitest";
import { getRandomItem } from "./getRandomItem";

describe('getRandomItem', () => {
    test("returns a string", () => {
        expect(typeof getRandomItem([])).toBe("string")
    });
    test("correctly returns an item from the input array", () => {
        const inputArr = [
            "apple",
            "banana",
            "cherry",
            "dragonfruit",
            "elderberry",
            "fig",
            "grape"
        ]
        const randomItemA = getRandomItem(inputArr);
        const randomItemB = getRandomItem(inputArr);
        const randomItemC = getRandomItem(inputArr);
        const randomItemD = getRandomItem(inputArr);
        
        expect(inputArr.includes(randomItemA)).toBe(true);
        expect(inputArr.includes(randomItemB)).toBe(true);
        expect(inputArr.includes(randomItemC)).toBe(true);
        expect(inputArr.includes(randomItemD)).toBe(true);

    })
})