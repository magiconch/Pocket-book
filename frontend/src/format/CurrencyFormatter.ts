/**
 *
 *
 * @class CurrencyFormatter
 */
class CurrencyFormatter extends NumberFormatter {
    readonly name: string = "currency";
    readonly symbol: string = "￥";
    readonly digits: number = 2
    /**
     *
     *
     * @static
     * @param {number} value
     * @return {*}  {string}
     * @memberof CurrencyFormatter
     */
    format(value: number): string {
        return value.toFixed(this.digits) + this.symbol;
    }
}



