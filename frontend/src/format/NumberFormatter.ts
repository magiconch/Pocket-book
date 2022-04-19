/**
 *
 *
 * @class NumberFormatter
 */
 class NumberFormatter implements IFormatter<number> {
    readonly name: string = "default";
    /**
     *
     * @static
     * @param {number} value
     * @return {*}  {string}
     * @memberof NumberFormatter
     */
    format(value: number): string {
        return value.toFixed(2);
    }
}

class NumberFormatterBuilder {
    static formatters: {[key: string]: NumberFormatter} = {
        "numberMapping": new NumberMappingFormatter(),
        "currency": new CurrencyFormatter()
    }

    static build(name: string = "default"): NumberFormatter {
        if (Object.prototype.hasOwnProperty.call(this.formatters, name)) {
            return this.formatters[name];
        }
        return new NumberFormatter();
    }
}

