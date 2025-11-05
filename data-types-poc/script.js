const input = document.getElementById("inputValue");
const output = document.getElementById("output");

function checkType() {
    let value = input.value;

    // Detect type
    let type = typeof value;

    // Convert to number if possible
    let asNumber = Number(value);
    let coercedType = typeof asNumber;

    output.innerHTML = `
        Entered value: "${value}"<br>
        Original type (always string from input): ${type}<br>
        As number: ${asNumber} (type: ${coercedType})<br>
        Example of coercion: "5" + 3 = "${"5" + 3}"<br>
        "5" - 3 = ${"5" - 3}<br>
        true + 2 = ${true + 2}<br>
        false + " is false" = "${false + " is false"}"
    `;
}

function coerceValue() {
    let value = input.value;

    // Automatic type coercion examples
    let coerced = value * 2; // string to number if possible
    let booleanCoercion = !!value; // string to boolean

    output.innerHTML = `
        Original value: "${value}" (type: ${typeof value})<br>
        Multiplied by 2: ${coerced} (type: ${typeof coerced})<br>
        Boolean coercion (!!value): ${booleanCoercion} (type: ${typeof booleanCoercion})
    `;
}

document.getElementById("checkType").addEventListener("click", checkType);
document.getElementById("coerceValue").addEventListener("click", coerceValue);
