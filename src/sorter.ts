import {Sortable} from './interfaces';


export class BubbleSort {
    public collection;

    constructor(collection: Sortable) {
        this.collection = collection;
    }

    public sort(): void {
        const {length} = this.collection;

        for (let i = 0; i < length; ++i)
            for (let ii = 0; ii < length; ++ii)
                if (this.collection.compare(i, ii)) this.collection.swap(i, ii);
        this.collection.print();
    }
}

