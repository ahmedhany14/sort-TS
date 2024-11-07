export class STR {
    public data: string

    public constructor(data: string) {
        this.data = data;
    }

    public get length(): number {
        return this.data.length;
    }

    public compare(i: number, ii: number): boolean {
        const char1 = this.data[i].toLowerCase();
        const char2 = this.data[ii].toLowerCase();
        return char1 < char2;
    }

    public swap(index1: number, index2: number): void {
        const strArray = this.data.split(""); // Convert string to array for mutability
        [strArray[index1], strArray[index2]] = [strArray[index2], strArray[index1]]; // Swap elements
        this.data = strArray.join("");
    }

    public print(): void {
        console.log(this.data);
    }


}