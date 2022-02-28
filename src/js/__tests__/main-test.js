import Team from "../main"

test ('check iteration', () => {
    function received(){
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

        const iter = new Team(heroes);

        for (let person of iter){
            console.log(person)
        }
    }

      

    expect(received()).toEqual(undefined)
})

test ('check generator', () => {
    function received(){
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

        const iter = new Team(heroes);

        for (let person of iter){
            console.log(person)
        }
    }

      

    expect(received()).toEqual(undefined)
})