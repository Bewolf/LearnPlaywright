//3 access modifiers in typescript
//public, private and protected
//access modifier can be used on Property and methods
//public is the default access modifier. It can be mentioned with given the 'public' keyword
//Private - It can be accessed only inside the class
//protected - Can be accessed inside the class and in inherited class

class Methods {

    public add() {
        console.log(2 + 5)
    }

    private sub() {
        console.log(7 - 3)
    }

    protected multiply() {
        console.log(5 * 3)
    }

    public data() {
        //inside the class private and protected method can be called inside a method using this.keyword.
        this.multiply()
        this.sub()
    }
}

let acc = new Methods();
acc.add()
acc.data()