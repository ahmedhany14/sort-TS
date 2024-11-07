export class Number {

    public data: number[]

    public constructor(data: number[]) {
        this.data = data;
    }

    public get length(): number {
        return this.data.length;
    }

    public compare(i: number, ii: number): boolean {
        return this.data[i] < this.data[ii];
    }

    public swap(i: number, ii: number): void {
        [this.data[i], this.data[ii]] = [this.data[ii], this.data[i]];
    }

    public print(): void {
        console.log(this.data);
    }
}