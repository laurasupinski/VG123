hi

// Lines 51 - 75
cursors = this.input.keyboard.createCursorKeys();
  }

  update(){
    if (cursors.left.isDown) {
      player.setVelocityX(-100); // we want to apply a negative x velocity to go left on the screen
    } else if (cursors.right.isDown) {
      player.setVelocityX(100); // we want to apply a positive x velocity to go right on the screen
    } else {   
      //if we don't include this then the player will always be going right or left instead of a L/R neutral upwards direction
      player.setVelocityX(0);
    }

    if (player.body.touching.down) {
      player.setVelocityY(-250);
    }


    // We want to the platforms to move downwards and create an effect of progressing upwards
    // This can be done by moving the camera but can also be done by moving the world around the player
    if (player.body.y <  gameOptions.height/2) {
      platforms.children.iterate(updateY, this);
    }
  }
