
/**
 * 
 * @param {string[]} inputArr 
 * @returns string
 */
export function getRandomItem(inputArr) {
    const randomIndex = Math.floor(Math.random() * inputArr.length)
    return inputArr[randomIndex]
}