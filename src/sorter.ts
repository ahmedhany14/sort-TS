export abstract class BubbleSort {
    abstract get length(): number;

    abstract compare(i: number, j: number): boolean;

    abstract swap(i: number, j: number): void;

    abstract print(): void;

    public sort(): void {
        const {length} = this;

        for (let i = 0; i < length; ++i)
            for (let ii = 0; ii < length; ++ii)
                if (this.compare(i, ii)) this.swap(i, ii);
        this.print();
    }
}

