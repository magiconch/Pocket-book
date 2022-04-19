class NumberMappingFormatter extends NumberFormatter {
    readonly name: string = "numberMapping";
    readonly keyValues: {[key: number]: string} = {
        0: "支出",
        1: "收入"
    };

    /**
     *
     * @static
     * @param {number} value
     * @return {*}  {string}
     * @memberof NumberFormatter
     */
    format(value: number): string {
        return this.keyValues[value];
    } 
}