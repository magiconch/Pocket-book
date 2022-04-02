class BillTypeField implements IFieldInfo<boolean> {
    
    // public static readonly fieldLabel: string = "type"

    private _instance: BillTypeField = new BillTypeField();

    public getInstance(): BillTypeField {
        return this._instance;
    }
    
    private constructor() {};

    public readonly fieldLabel: string = "type";
    public readonly isRequired: boolean = true;
    public readonly fieldName: string = "账单类型";

    public stringity(value: boolean): string {
        if (value) {
            return "收入";
        } else {
            return "支出";
        }
    }
    
}

class BillTimeField implements IFieldInfo<Date> {
    public readonly fieldLabel: string = "time";
    public readonly isRequired: boolean = true;
    public readonly fieldName: string = "账单时间";

    private readonly _dateType: string = "ISO 8601";

    public stringity(value: Date): string {
        return value.toISOString();
    }
    
}

class BillCategoryField implements IFieldInfo<string> {
    public readonly fieldLabel: string = "category";
    public readonly isRequired: boolean = false;
    public readonly fieldName: string = "账单分类";
    public converter: getValueById<string> = (id: string) => id;

    public stringity(value: string): string {
        return this.converter(value);
    }
    
}

class BillAmountField implements IFieldInfo<number> {
    public readonly fieldLabel: string = "amount";
    public readonly isRequired: boolean = true;
    public readonly fieldName: string = "账单金额";

    private readonly _symbol: string = "￥";
    private readonly _digits: number = 2;

    public stringity(value: number): string {
        return value.toFixed(this._digits) + this._symbol;
    }
    
}


