import {Number} from './numberCollection';
import {STR} from './stringCollection';
import {linkedList} from "./linkedList";
import {BubbleSort} from './sorter';


const number = new Number([1, 3, 2, 4, 5, -9, 7, 6, 10, 974, 94, 336, 7]);
const sorter = new BubbleSort(number);

sorter.sort();

const str = new STR("XaYbBZc");
const sorter2 = new BubbleSort(str);

sorter2.sort();

const list = new linkedList(1);
list.push(5);
list.push(3);
list.push(2);
list.push(4);
list.push(-1);
list.push(0);
list.push(10);

const sorter3 = new BubbleSort(list);
sorter3.sort();
