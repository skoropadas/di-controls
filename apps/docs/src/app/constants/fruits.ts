export interface Fruit {
	id: number;
	name: string;
}

export const FRUITS: Fruit[] = [
	{ id: 1, name: 'Apple' },
	{ id: 2, name: 'Banana' },
	{ id: 3, name: 'Orange' },
	{ id: 4, name: 'Pineapple' },
];

export const FRUIT_NAMES: string[] = FRUITS.map((fruit: Fruit) => fruit.name);
