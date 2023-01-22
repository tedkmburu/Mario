class Player
{
    constructor(props)
    {
        this.pos = props.pos.mult(blockSize);
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
    }

    display() 
    {
        push()
            fill("red")
            stroke("black")
            rect(this.pos.x, this.pos.y, playerSize.x, playerSize.y)
        pop()
    }

    move()
    {
        if (!this.collisionDetection())
        {
            this.vel.add(this.acc)

            if(this.vel.mag() > maxSpeed)
            {
                this.vel.setMag(maxSpeed)
            }
            this.pos.add(this.vel)
        }
    }

    collisionDetection()
    {
        let nextPosition = p5.Vector.add(this.vel, this.pos)
        let collideX = false; 
        let collideY = false; 
        blocks.forEach(block => {
            
            let aPos = player.pos.copy();
            let bPos = block.pos.copy(); 
            let aSize = playerSize.copy();
            let bSize = block.size.copy();

            if (aPos.x >= bPos.x + bSize.x || bPos.x >= aPos.x + aSize.x) collideX = true;

            if (aPos.y >= bPos.y + bSize.y || bPos.y >= aPos.y + aSize.y) collideY = true;

            let distanceRight = (block.pos.x) - (nextPosition.x) - playerSize.x;
            let distanceLeft = nextPosition.x - block.pos.x + block.size.x;

            if ((collideX == collideY && !collideX)) 
            {
                if (distanceRight < 0 && distanceLeft < block.size.x) 
                {
                    player.pos.x = player.pos.x - 0.5;
                }
                if(distanceLeft > block.size.x)
                {
                    player.pos.x = player.pos.x + 0.5;
                }
                if( nextPosition.y + playerSize.y > block.pos.y)
                {
                    player.pos.y = player.pos.y - 0.5;
                    player.vel.y = -1;
                }
            }

            
            
        })
        return (collideX == collideY && !collideX);
    }
}