{
    // Javascript
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    // Typescript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // Javascript
    function jsFetchNum(id) {
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }
    // Javascript
    function fetchNum(id: string): Promise<number> {
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }
}