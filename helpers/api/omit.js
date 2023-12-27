export { omit };

export default function omit(obj, key) {
    const { [key]: omitted, ...rest } = obj;
    return rest;
}