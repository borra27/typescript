{
    // Javascript
    // old: var ...쓰지 않는 것을 추천
    var age = 6
    age = 1
    // let
    let name = "hello";
    name = "hi";
    // const

    /**
     * Javascript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array, ...
     */

    /**
     * Typescript
     */
    // number
    const num: number = 8;

    // string
    const str: string = "hello";

    // boolean
    const boal: boolean = false;

    // undefined 아무것도 결정되지 않는 상태
    let name: undefined; // X
    let age: number | undefined
    age = undefined;
    age = 1

    // null 값이 비었음
    let person: null; // X
    let person2: string | null;

    // unknown X
    let notSure: unknown = 0;
    notSure = "he";
    notSure = true;

    // any
    let anything: any = 0;
    anything = "hello";

    // void
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // X

    // never
    function throwError(message: string): never{
        // message => server (log)
        throw new Error(message);
        while (true) {}
    }
    let neverEnding: never; // X

    // object
    let obj: object = [1, 2] // X 좀 더 구체적으로 적는 것이 좋음
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'Sim'})
    acceptSomeObject({animal: "dog"})
}