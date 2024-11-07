import {Number} from './numberCollection';
import {BubbleSort} from './sorter';


const number = new Number([1, 3, 2, 4, 5]);
const sorter = new BubbleSort(number);

sorter.sort();