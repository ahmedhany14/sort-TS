import {BubbleSort} from "./sorter";

export class linkedList extends BubbleSort {
    public data: number;
    public next: linkedList | null;
    public length: number;

    public constructor(data: number) {
        super();
        this.data = data;
        this.next = null;
        this.length = 1;
    }

    public get lenght(): number {
        return this.length;
    }

    public push(value: number): void {
        if (this.next === null) {
            const newNode = new linkedList(value);
            this.next = newNode;
        } else {
            this.next.push(value);
        }
        this.length++;
    }

    public pull(): void {
        let node: linkedList | null = this;
        while (node.next !== null) {
            if (node.next.next === null) {
                node.next = null;
                break;
            }
            node = node.next;
        }
        this.length--;
    }

    public compare(i: number, ii: number): boolean {
        let node: linkedList | null = this;
        let index = 0;
        while (node !== null) {
            if (index === i) {
                const data1 = node.data;
                let index2 = 0;
                let node2: linkedList | null = this;
                while (node2 !== null) {
                    if (index2 === ii) {
                        const data2 = node2.data;
                        return data1 < data2;
                    }
                    node2 = node2.next;
                    index2++;
                }
            }
            node = node.next;
            index++;
        }

        return false;
    }


    public swap(i: number, ii: number): void {
        let node: linkedList | null = this;
        let index = 0;
        while (node !== null) {
            if (index === i) {
                const data1 = node.data;
                let index2 = 0;
                let node2: linkedList | null = this;
                while (node2 !== null) {
                    if (index2 === ii) {
                        const data2 = node2.data;
                        node.data = data2;
                        node2.data = data1;
                        return;
                    }
                    node2 = node2.next;
                    index2++;
                }
            }
            node = node.next;
            index++;
        }
    }

    public print(): void {
        let current: linkedList | null = this;
        const arr: number[] = [];
        while (current !== null) {
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr);
    }
}