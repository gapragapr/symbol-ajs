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

    *[Symbol.iterator](){
        for (let person of this.team){
            yield person
        }
    }
}

const heroes = [
    {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  },
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 2,
    attack: 40,
    defence: 10
  },
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10
  },
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 4,
    attack: 40,
    defence: 10
  }
];