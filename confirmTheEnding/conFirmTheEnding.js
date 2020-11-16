module.exports = (subject, endToConfirm) => {
    return confirmEnding(subject, endToConfirm);
}

const confirmEnding = (subject, endToConfirm) => {
    const lengthOfEndToConfirm = endToConfirm.length;
    const endCalculated = subject.length - lengthOfEndToConfirm;

    return subject.substring(endCalculated) === endToConfirm;
};