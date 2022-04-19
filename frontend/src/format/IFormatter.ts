interface IFormatter<T> {
    readonly name: string;
    format(value: T): string;
}

type baseValueType = string | number | Date | boolean;

type formatters = IFormatter<string> | IFormatter<number> | IFormatter<Date>;

