class BubbleSort {
    public collection: number[];

    constructor(collection: number[]) {
        this.collection = collection;
    }

    public sort(): void {
        const {length} = this.collection;

        for (let i = 0; i < length; ++i) {
            for (let ii = 0; ii < length; ++ii) {
                if (this.collection[i] < this.collection[ii])
                    [this.collection[i], this.collection[ii]] = [this.collection[ii], this.collection[i]];
            }
        }

        console.log(this.collection);
    }
}

new BubbleSort([1, 5, 3, 2, 4]).sort();