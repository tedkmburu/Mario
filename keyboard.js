
function moveCharacter()
{
    player.acc = createVector(0, 0)
    player.vel.x = player.vel.x * 0.9
    player.acc.y = 1;

    if (keyIsDown(RIGHT_ARROW)) // right
    {
        player.vel.x = 0;
        player.acc.x = agility;
    }
    if (keyCode == 40) // down
    {
        // vel = createVector(0, 1)
    }
    if (keyIsDown(32)) // jump
    {
        player.acc.y = -1000 
    }
    if (keyIsDown(LEFT_ARROW)) // left
    {
        player.vel.x = 0;
        player.acc.x = -agility
    }
    else
    {
        
    }
}
