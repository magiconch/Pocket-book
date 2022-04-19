/**
 *
 *
 * @class DateFormatter
 */
class DateFormatter implements IFormatter<Date> {
    readonly name: string = "default";
    readonly template: string = "YYYY-MM-DDTHH:mm:ss.sssZ";

    /**
     * 
     *
     * @static
     * @param {Date} value 
     * @return {*}  {string}
     * @memberof DateFormatter
     */
    format(value: Date): string {
        return value.toISOString();
    }
}


class DateFormatterBuilder {
    static formatters: {[key: string]: DateFormatter} = {}

    static build(name: string = "default"): DateFormatter {
        if (Object.prototype.hasOwnProperty.call(this.formatters, name)) {
            return this.formatters[name];
        }
        return new DateFormatter();
    }
}