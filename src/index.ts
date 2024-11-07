import {Number} from './numberCollection';
import {STR} from './stringCollection';
import {BubbleSort} from './sorter';


const number = new Number([1, 3, 2, 4, 5]);
const sorter = new BubbleSort(number);

sorter.sort();

const str = new STR("XaYbBZc");

const sorter2 = new BubbleSort(str);

sorter2.sort();