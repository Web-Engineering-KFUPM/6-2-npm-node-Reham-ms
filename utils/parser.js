import _ from "lodash";

export function parseNumbers(args) {
    return _.map(args, arg => Number(arg));
}

export function isValidOperation(operation) {
    const validOperations = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOperations, operation);
}