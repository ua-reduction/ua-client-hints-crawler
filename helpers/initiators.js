/**
 * @param {{ callFrames: StackFrame[]; parent: any; }} stack
 * @returns {string[]}
 */
function getInitiatorsFromStack(stack) {
    /**
     * @type {string[]}
     */
    const currentInitiators = [];
    /**
     * @type {string[]}
     */
    let parentInitiators = [];

    stack.callFrames.forEach(frame => {
        if (frame.url) {
            currentInitiators.push(frame.url);
        }
    });

    if (stack.parent) {
        parentInitiators = getInitiatorsFromStack(stack.parent);
    }

    return currentInitiators.concat(parentInitiators);
}

/**
 * @param {RequestInitiator} initiator
 * @returns {string}
 */
function getAllInitiators(initiator) {
    /**
     * @type {string[]}
     */
    const allInitiators = [];

    if (!initiator) {
        return '';
    }

    if (initiator.url) {
        allInitiators.push(initiator.url);
    }

    if (initiator.stack) {
        const initiatorList = getInitiatorsFromStack(initiator.stack);
        for (const url of initiatorList) {
            if(!allInitiators.includes(url)) {
                allInitiators.push(url);
            }
        }
    }
    return allInitiators.join(', ');
}

module.exports = {
    getAllInitiators
};

/**
 * @typedef {object} RequestInitiator
 * @property {string} type
 * @property {{callFrames: StackFrame[], parent: object}=} stack
 * @property {string=} url
 * @property {number=} lineNumber
 */

/**
 * @typedef {object} StackFrame
 * @property {string} functionName
 * @property {string} scriptId
 * @property {string} url
 * @property {number} lineNumber
 * @property {number} columnNumber
 */