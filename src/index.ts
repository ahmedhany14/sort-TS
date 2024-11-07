import {Number} from './numberCollection';
import {STR} from './stringCollection';
import {linkedList} from "./linkedList";

const numbers = new Number([1, -3, 2, 4, 5, 6, 7, 8, 9, 10]);
const strings = new STR("XaaAQqwAxyBb");
const list = new linkedList(10);
list.push(-20);
list.push(64);
list.push(2);
list.push(3);
list.push(4);
list.push(55);
list.push(6);
numbers.sort();
strings.sort();
list.sort();