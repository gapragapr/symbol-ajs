import Person from "./Person";

export default class Team{
    constructor(arr){
        this.team = arr
    }

    [Symbol.iterator](){
        let current = 0
        let last = Array.from(this.team).length - 1;

        const context = this;

        return{
            next(){
                if (current <= last){
                    return{
                        done: false,
                        value: context.team[current++]
                    }
                }

                return{
                    done: true,
                }

            }
        }
    }
}