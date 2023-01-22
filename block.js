class Block
{
    constructor(props)
    {
        this.pos = props.pos.mult(blockSize);
        this.size = props.size.mult(blockSize);
        this.type = props.type;

        this.bgColor;
        this.borderColor;

        if (this.type == "brick")
        {
            this.bgColor = "#954b0c";
            this.borderColor = "black";
        }
    }

    display() 
    {
        push()
            stroke(this.borderColor)
            fill(this.bgColor)
            
            for (let x = this.pos.x; x < (this.size.x + this.pos.x); x+= blockSize) 
            {
                for (let y = this.pos.y; y < (this.size.y + this.pos.y); y+= blockSize) 
                {
                    rect(x, y, blockSize, blockSize)
                }
            }
        pop()
    }
}