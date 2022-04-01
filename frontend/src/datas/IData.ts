type PropertyValue = string | number | Date | boolean | undefined;

// 这里本来准备写PropertyKey，但是考虑到一般就算也可以转成数字，所以直接string
interface IData {
    readonly [fieldLabel: string]: PropertyValue;
}