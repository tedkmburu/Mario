let blocks = []
const blockSize = 20;

let player;
let playerSize; 

const maxSpeed = 3;;
const agility = 2

function setup() 
{
    createCanvas(innerWidth, innerHeight)

    blocks.push(new Block({
        pos: createVector(5, 19),
        size: createVector(20, 2),
        type: "brick"
    }))

    blocks.push(new Block({
        pos: createVector(10, 17),
        size: createVector(10, 2),
        type: "brick"
    }))

    playerSize = createVector(blockSize, blockSize)

    player = new Player({
        pos: createVector(6, 17)
    })
}

function draw() 
{
    background("#6185f8")
    blocks.forEach(block => {
        block.display()
    })


    moveCharacter()

    player.move()
    player.display()
}