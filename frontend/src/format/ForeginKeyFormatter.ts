class ForeginKeyFormatter implements IFormatter<string> {
    readonly name: string = "default";
    readonly datas: {[key: string]: string} = {}


    constructor(databaseName: string) {
        this.loadData();
    }

    private loadData() {
        // TODO: get the fake data
        this.datas["1bcddudhmh"] = "车贷"
    }

    /**
     * 
     *
     * @static
     * @param {Date} value 
     * @return {*}  {string}
     * @memberof DateFormatter
     */
    format(value: string): string {
        if (Object.prototype.hasOwnProperty.call(this.datas, value)) {
            return this.datas[value];
        }
        return this.datas[value];
    }
}