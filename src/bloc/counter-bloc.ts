import { Bloc } from "kiss-js-bloc";

class CounterBloc extends Bloc<number> {

    constructor() {
        super(0)

        this.on("decreament", (state) => {
             this._state  = this._state - state;
             this.emit(this._state)       
        })


        this.on("increament", (state) => {
            this._state  = this._state + state;
            this.emit(this._state)
       })
        
    }
   


}

export default CounterBloc