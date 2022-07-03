import {FlCompareFunction} from 'flex-controls/types';

/** Uses to implement host with compare function */
export abstract class FlCompareHost<T> {
    /** Uses to compare two values (useful to compare two objects, for example by id) */
    abstract compareFn: FlCompareFunction<T>;
}
