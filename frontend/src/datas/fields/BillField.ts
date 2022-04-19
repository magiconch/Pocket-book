interface IBillField<T> {
    stringity(value: T): string;
}

/**
 *
 *
 * @class BillField
 * @implements {IBillField<T>}
 * @template T
 */
class BillField<T> implements IBillField<T> {
    public fieldName: string;
    public fieldLabel: string;
    
    public columnType: string = "Integer";
    public required: boolean;
    
    public formatter: IFormatter<T>;
    

    constructor(fieldName: string, fieldLabel: string, formatter: IFormatter<T>, required: boolean = true) {
        this.fieldName = fieldName;
        this.fieldLabel = fieldLabel;
        this.formatter = formatter;
        this.required = required;
    }

    public stringity(value: T): string {
        return this.formatter.format(value);
    };
}