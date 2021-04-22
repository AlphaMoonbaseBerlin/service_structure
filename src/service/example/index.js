export default {
    state: {
        some_value: 1,
        dict: { a: 1,
                b: 1,}
    },

    hello_world() {
        console.log("Hello World")
    },
    increment_counter() {
        this.state.some_value += 1;
        this.state.dict.a += 2;
        this.state.dict.b += 3;
    }
}