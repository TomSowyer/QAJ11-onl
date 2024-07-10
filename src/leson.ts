export class Methods {
    static sortNumberArray(array: number[], type = 'asc' || 'desc') {
        if (type == 'asc') array.sort((a: number, b: number) => {
            return a - b;
        });
        return array.sort();
    }
}