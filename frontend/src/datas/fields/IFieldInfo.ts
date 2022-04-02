interface IFieldInfo<T> {
    /**
     * 假设label是不重复的主键
     *
     * @type {string}
     * @memberof IField
     */
    readonly fieldLabel: string;
    readonly isRequired: boolean;
    readonly fieldName: string;
    stringity?(value: T): string;
    
}
