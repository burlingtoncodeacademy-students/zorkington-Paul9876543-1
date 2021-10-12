
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  
  //while(the player is still in the game) {
  //await ask()
  //} else {
  //await ask(`Do you want to play again?\nyes or no? >_)
  //yes = start from beginning
  //no = console.log(`Thanks for playing`)process.exit()
  
  const welcomeMessage = `\n  The world has fallen victim to the virus. 
  It has mutated, changing it's host into mindless brain hungry zombies.
  You have been tasked with the quest to find the man who has the cure. 
  With knowledge of a scientist who developed a vaccine you tried to meet him at his lab. 
  Upon arrival, however, you found the lab had been overrun with zombies and the scientist had fled. 
  Tracking him down to a hotel in the middle of town you find yourself in an alley standing in front of the Bluebird Inn. 
 
  ---------------------------------Instructions-------------------------------------------
  
  Look around using; look... (north, south, east, and west).
  Use action words like; go...(direction), go to..., go through..., inspect..., pick up..., use..., and drop... (object), etc... Be creative.
  Type 'i' to look up your inventory.

  The next move is yours.\nWhat would you like to do?>_`;
  let response = await ask(welcomeMessage);
  console.log(response)

//-----------------------------------Establish global arrays-------------------------------------

let room = ['frontDoor', 'lobby', 'kitchen', 'elevatorHallway', 'firstFloorStairwell', 'elevator', 'secondFloorHallway', 'secondFloorStairwell', 'guestRoomOne', 'guestRoomTwo', 'guestRoomThree', 'exit',];

let action = ['look', 'look at', 'read', 'go', 'go to', 'go through', 'walk', 'walk to', 'run', 'run to', 'hit', 'stab', 'fight', 'attack', 'punch', 'bite', 'kick', 'use', 'inspect', 'pick', 'pick up', 'grab', 'take', 'drop', 'smell', 'taste', 'lick', 'feel', 'touch', 'eat', 'drink', 'cry', 'sit', 'yell', 'yell at', 'scream', 'scream at', 'talk', 'talk to', ];

let direction = ['north', 'south', 'east', 'west',];

let roomOneInventory = ['wood planks', 'elevator hallway key',];

let roomTwoInventory = ['chef knife',];

let roomSevenInventory = ['door key card',];

let roomNineInventory = ['backpack', 'notes', 'laptop',];

let displayPlayerInventory = ('i');

let player = {
  playerInventory: [],
  currentLocation: 'front door',
}

//----------------------------------functions--------------------------------------------
 
 async function validAction(action) {'look', 'look at', 'read', 'go', 'go to', 'go through', 'walk', 'walk to', 'run', 'run to', 'hit', 'stab', 'fight', 'attack', 'punch', 'bite', 'kick', 'use', 'inspect', 'pick', 'pick up', 'grab', 'take', 'drop', 'smell', 'taste', 'lick', 'feel', 'touch', 'eat', 'drink', 'cry', 'sit', 'yell', 'yell at', 'scream', 'scream at', 'talk', 'talk to',


  validAction = doAction
 
  if (doAction === 'look') {
       await ask(`Look at what?`);
       if (response.toLowerCase().trim() = validDirection || validObject) {
         console.log(`description`)
       } else {
         console.log(`Object doesn't exist or Invalid command.`)
       }   
}

if (doAction === 'look at') {  
        if (response.toLowerCase().trim() = validObject) {
          console.log(description);
        } else {
          console.log(`Object doesn't exist or invalid command.`)
      }
}

if (doAction === 'read') {
      await ask(`Read what?`);
      if (response.toLowerCase().trim() = validObject && readable) {
        console.log(description);
       } else {
        console.log(`There is nothing to read.`)
       }
}

if (doAction === 'go') {
      await ask(`go where?`);
      if (response.toLowerCase().trim() = validDirection) {
        console.log(description);
      } else {
        console.log(`You can't go that direction or invalid direction.`);
      }
}

if (doAction === 'go to'(direction, object)) {
      if (response.toLowerCase().trim() = validDirection, object = validObject) {
        console.log(description);
      } else {
        console.log(`You can't go to ${direction || object} or invalid command.`);
      }
}

if (doAction === 'go through'(door)) {
      await ask(`What door? north, south, east, or west?\n >_`) 
      if (response.toLowerCase().trim() = validDirection && doorNotLocked) {
        if (validMovement = validMovement) {
          console.log(`You are in the ${location}. The door closes behind you.`)
      }
        else if (movement !== validMovement) {
          console.log(`Invalid movement.`)
        }
      else if (door !== doorNotLocked) {
      console.log(`The door is locked.`)
      }  
    } else {
        console.log("Invalid command.")
      }
    }

if (doAction === 'walk') {
      await ask(`What direction?`) 
      if (response.toLowerCase().trim() = validDirection) {
        console.log(description)
      } else {
        console.log(`Invalid command.`)
      }
    }

  if (doAction === 'walk to'(direction, object)) {
        if (direction = validDirection, object = validObject) {
          console.log(description);
        } else {
          console.log(`You can't walk to ${direction || object} or invalid command.`);
        }
  }

if (doAction === 'run') {
      await ask(`What direction?`);
       if (response.toLowerCase().trim() = validDirection) {
         console.log(description)
       } else {
         console.log("Invalid command.")
       }
}

if (doAction === 'run to'(direction, object)) {
  if (direction = validDirection, object = validObject) {
    console.log(description);
  } else {
    console.log(`You can't run to ${direction || object} or invalid command.`);
  }
}

if (doAction === 'use') {
      await ask(`What would you like to use?`);
      if (response.toLowerCase().trim() = validObject) {
        console.log(validAction)
      } else {
        console.log(`That can't be used or invalid command.`)
      }
}

if (doAction === 'hit') {
      await ask(`What would you like to hit?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You hit the ${object} with all your might.`)
      }
      else if (response.toLowerCase().trim() === 'zombie') {
        console.log(`You hit the zombie with all your might. The zombie likes your tickles and invites you over for some tea. You might want to pick up a weapon in your next life.`)
      process.exit()
      } else {
        console.log(`There is nothing to hit or invalid command.`)
      }
    }

if (doAction === 'stab') {
      await ask("What would you like to stab?")
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You stabbed the ${object} with all your might.`)
      }
       else if (response.toLowerCase().trim() === 'zombie') {
         console.log(`You stab the zombie right in the head. His body goes limp and crumples to the ground. Prepare yourself for future therapy.`)
       } else {
         console.log(`There is nothing to stab or invalid command.`)
       }
      }

if (doAction === 'fight') {
    await ask(`What would you like to fight?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You fight the ${object} to the ground!`)
      }
      else if (response.toLowerCase().trim() === 'zombie') {
        console.log(`You fight the zombie to the ground. The zombie likes your roll in the hay and invites you back to his barn for some more. You might want to pick up a weapon in your next life.`)
      process.exit()
      } else {
        console.log(`There is nothing to fight or invalid command.`)
      }
    }

if (doAction === 'attack') {
      await ask(`What would you like to attack?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You leap into the air like a racoon with rabies towards the ${object}. The ${object} learned it's lesson.`)
      }
        else if (response.toLowerCase().trim() === 'zombie') {
          console.log(`You leap into the air like a racoon with rabies towards the zombie. The zombie likes your little dance and asks if you need a partner. You might want to pick up a weapon in your next life.`)
      process.exit()
        } else {
          console.log(`There is nothing to attack or invalid command.`)
        }
      }

if (doAction === 'punch') {
      await ask(`What would you like to punch?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You punch the ${object} with your clinched fist.`)
      }
      else if (response.toLowerCase().trim() === 'zombie') {
        console.log(`You punch the zombie with your clinched fist. The zombie likes your tickle and invites you over for some tea. You might want to pick up a weapon in your next life.`)
      process.exit()
      } else {
        console.log(`There is nothing to punch or invalid command.`)
      }
    }

if (doAction === 'bite') {
      await ask(`What would you like to bite?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You bite the ${object}. You broke a tooth in the process and contracted the virus. You will shortly turn into a zombie.`)
      process.exit()
      }
      else if (response.toLowerCase().trim() === 'zombie') {
        console.log(`You bite the zombie! Really? The zombie bites back.`)
      process.exit()
      } else {
        console.log(`There is nothing to bite or invalid command.`)
      }
    }

if (doAction === 'kick') {
      await ask(`What would you like to kick?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You kick the ${object} with the grace of a kung fu master. Your style is better than the ${object}'s style.`)
      }
      else if (response.toLowerCase().trim() === 'zombie') {
        console.log(`You kick the zombie with the grace of a kung fu master. Unfortunately your drunken penguin style is no match for the zombie's tiger style. You might want to pick up a weapon in your next life.`)
      process.exit()
      } else {
        console.log(`There is nothing to kick or invalid command.`)
      }
    }

if (doAction === 'inspect') {
      await ask(`What would you like to inspect?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(description)
      } else {
        console.log(`There is nothing to inspect or invalid command.`)
      }
    }

if (doAction === 'pick') {
      await ask(`What would you like to pick?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You picked the ${object}. It is now in your inventory.`)
      } else {
        console.log(`That can't be picked or invalid command.`)
      }
}

if (doAction === 'pick up') {
      await ask(`What would you like to pick up?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You pick up the ${object}. It is now in your inventory.`)
      } else {
        console.log(`That can't be picked up or invalid command.`)
      }
    }

if (doAction === 'grab') {
      await ask(`What would you like to grab?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You grabbed the ${object}. It is now in your inventory.`)
      } else {
        console.log(`That can't be grabbed or invalid command.`)
      }
    }

if (doAction === 'take') {
      await ask(`What would you like to take?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You have taken the ${object}. It is now in your inventory.`)
      } else {
        console.log(`That can't be taken or invalid command.`)
      }
    }

if (doAction === 'drop') {
      await ask(`What would you like to drop?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You dropped the ${object}. It is no longer in your inventory.`)
      } else {
        console.log(`That can't be dropped or invalid command.`)
      }
    }

if (doAction === 'smell') {
      await ask(`What would you like to smell?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`The ${object} smells ${description}.`)
      } else {
        console.log(`That can't be smelled or invalid command.`)
      }
    }

if (doAction === 'taste') {
      await ask(`What would you like to taste?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`The ${object} taste ${description}. Now you have contracted the virus and will shortly be turning into a zombie! Way to go brains!`)
      process.exit()
      } else {
        console.log(`That can't be tasted or invalid command.`)
      }
    }

if (doAction === 'lick') {
      await answer(`What would you like to lick?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You have lick ${object}. Now you have contracted the virus and will soon turn into a zombie! That's what you get for being gross!`)
      process.exit()
      } else {
        console.log(`You can't lick that or invalid command`)
      }
    }

if (doAction === 'feel') {
      await ask(`What would you like to feel?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`The ${object} feels ${description}.`)
      } else {
        console.log(`That can't be felt or invalid command.`)
      }
    }

if (doAction === 'touch') {
      await ask(`What would you like to touch?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You touched the ${object}. Now your finger is dirty.`)
      } else {
        console.log(`That can't be touched or invalid command.`)
      }
    }

if (doAction === 'eat') {
      await ask(`What would you like to eat?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`It's probably better to stay on task rather than contract dysentery.`)
      } else {
        console.log(`That can't be eaten or invalid command.`)
      }
    }

if (doAction === 'drink') {
      await ask(`What would you like to drink?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`It's probably better to stay on task rather than contracted dysentery`)
      } else {
        console.log(`That can't be drank or invalid command.`)
      }
    }

if (doAction === 'cry') {
    console.log(`You can't take the strain any longer. Your knees buckle and you fall to the ground in the fetal position, sobbing uncontrollably. Break time is over! Get back to work!`)
}

if (doAction === 'sit') {
    console.log(`You sit down for a bit and contemplate your life choices. Your not happy with the outcome and decide to get back to work.`)
}


if (doAction === 'yell') {
      console.log(`AAAAAAARRRRRRRRGGGGGG!!!`)
}

if (doAction === 'yell at') {
      await ask(`What would you like to yell at?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You give the ${object} a thorough verbal thrashing. Hopefully the ${object} will think twice before crossing you in the future.`)
      } else {
        console.log(`That can't be yelled at or invalid command.`)
      }
    }

if (doAction === 'scream') {
      console.log(`AAAAAOOOOOOOOOOIIIIIIIIEEEEEE!!!!`)
}

if (doAction === 'scream at') {
      await ask(`What would you like to scream at?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You scream your little lungs out at the ${object}. The ${object} now feels bad about itself.`)
      } else {
        console.log(`That can't be screamed at or invalid command.`)
      }
    }

if (doAction === 'talk') {
      console.log(`You begin babbling incoherently to yourself.`)
}

if (doAction === 'talk to') {
      await ask(`What would you like to talk to?`)
      if (response.toLowerCase().trim() = validObject) {
        console.log(`You try holding a conversation as long as you can with the ${object}. But it's like talking to a brick wall.`)
      } else {
        console.log(`That can't be talked to or invalid command.`)
      }
    }

  

//function validMovement() {

//}

// function roomDescription() {

// }

  async function pickUpItem(itemToPickUp, fromArray, toArray,) {

    console.log('test one')

   if (fromArray.includes(itemToMove) && !toArray.includes(itemToMove)) {
//     item in room inventory
      function ifRoomContains(selectedItem) {
        return itemToMove === selectedItem;
      }
      let theItem = fromArray.find(ifRoomContains);
      let index = fromArray.indexOf(itemToMove);
      let start = fromArray.slice(0, index);
      let end = fromArray.slice(index + 1);
      fromArray = start.concat(end);
      toArray.push(theItem);

      return true
    }
    return false
  }

async function dropItem(itemToDrop, fromArray, toArray) {

//console.log()

  if (fromArray.includes(itemToMove) && !toArray.includes(itemToMove)) {
    // item in player inventory
    function ifPlayerInventoryContains(selectedItem) {
      return itemToMove === selectedItem;
    }
      let theItem = fromArray.find(ifPlayerInventoryContains);
      let index = fromArray.indexOf(itemToMove);
      let start = fromArray.slice(0, index);
      let end = fromArray.slice(index + 1);
      fromArray = start.concat(end);
      toArray.push(theItem);

      return true
    
  }
  return false
}

//function playerInventory() {

//}

//function roomInventory() {

//}
//---------------------------------------classes------------------------------------------

//   //all encompassing game board class

class GameBoard {
  constructor(currentLocation) {
    let validLocation = [
      this.frontDoor = frontDoor,
      this.lobby = lobby,
      this.kitchen = kitchen,
      this.elevatorHallway = elevatorHallway,
      this.firstFloorStairwell = firstFloorStairwell,
      this.elevator = elevator,
      this.secondFloorHallway = secondFloorHallway,
      this.secondFloorStairwell = secondFloorStairwell,
      this.guestRoomOne = guestRoomOne,
      this.guestRoomTwo = guestRoomTwo,
      this.guestRoomThree = guestRoomThree,
      This.exit = exit,
    ];

    if (validLocation.includes(currentLocation)) {
      this.currentLocation = currentLocation;
    } else {
      this.currentLocation = "frontDoor";
    }
  }
  //-----------------------------------state machine for movement--------------------------------------------

  enterState(newLocation) {
    if (this.canChangeTo(newLocation)) {
      this.currentLocation = newLocation;
    } else {
      console.log(`invalid movement ${this.currentLocation} to ${newLocation}`);
    }

     this.rooms = newLocation;
     this.frontDoor = frontDoor;
     this.lobby = lobby;
     this.kitchen = kitchen;
     this.elevatorHallway = elevatorHallway;
     this.firstFloorStairwell = firstFloorStairWell;
     this.elevator = elevator;
     this.secondFloorHallway = secondFloorHallway;
     this.secondFloorStairwell = secondFloorStairwell;
     this.guestRoomOne = guestRoomOne;
     this.guestRoomTwo = guestRoomTwo;
     this.guestRoomThree = guestRoomThree;
     this.exit = exit;
  }

  canChangeTo(newCurrentLocation) {
    let validMovement = {
      frontDoor: ["lobby"],

      lobby: ["frontDoor", "kitchen", "elevatorHallway"],

      kitchen: ["lobby"],

      elevatorHallway: ["lobby", "firstFloorStairwell", "elevator"],

      firstFloorStairwell: ["elevatorHallway"],

      elevator: ["elevatorHallway", "secondFloorHallway"],

      secondFloorHallway: [
        "elevator",
        "secondFloorStairwell",
        "guestRoomOne",
        "guestRoomTwo",
        "guestRoomThree",
        "exit",
      ],

      secondFloorStairwell: ["secondFloorHallway"],

      guestRoomOne: ["secondFloorHallway"],

      guestRoomTwo: ["secondFloorHallway"],

      guestRoomThree: ["secondFloorHallway"],

      exit: ["end game"],
    };

    let allowed = validMovement[this.currentLocation];

    if (allowed.includes(newCurrentLocation)) {
      return true;
    } else {
      return false;
    }
  }
}

let myLocation = new GameBoard("frontDoor");

 console.log(myLocation.currentLocation);
// myLocation.enterState("lobby");

// console.log(`You are now in the ${myLocation.currentLocation}. The door closes behind you.`);
// myLocation.enterState("kitchen");

// console.log(`You are now in the ${myLocation.currentLocation}. The door closes behind you.`);
// myLocation.enterState("lobby");

// console.log(`You are now in the ${myLocation.currentLocation}. The door closes behind you.`);
// myLocation.enterState("elevatorHallway");

// console.log(`You are now in the ${myLocation.currentLocation}. The door closes behind you.`);
// myLocation.enterState("firstFloorStairwell");

// console.log(`You are now in the ${myLocation.currentLocation}. The door closes behind you.`);
// myLocation.enterState("secondFloorStairwell");



   //--------------------------------------------individual room class-----------------------------------

  class FrontDoor {
   constructor(alley) {
   let roomInventory = [];
   
   class FrontDoorInventory {
     constructor(direction, item, description, action, takeable, droppable,) {
      this.direction = direction; 
      this.item = item;
       this.description = description;
       this.action = action || 'nothing happens';
       this.takeable = takeable || false;
       this.dropable = dropable || false;
     }
     
      //take item function
     take() {
       if (this.takeable) {
         roomInventory.push(this.item);
         playerInventory.pop(this.item);
         return `You picked up ${this.item} and placed it in your inventory.`;
       } else {
         return `You can't take that.`
       }
     }

     //description function
     describe() {
       if (this.description) {
         return `${this.description}`;
       }
     }

     //action function
     verb() {
       if (this.action) {
         return `${this.action}`;
       }
     }

    //direction function
    compass() {
      if (this.direction) {
        return `${this.description}`
      }
    }

     //do action with item
     use() {
       if (this.item === playerInventory.includes && validAction) {
         return `${doAction()}`
       }
     }

     //drop item function
     drop() {
       if (this.droppable) {
playerInventory.push(this.item);
roomInventory.push(this.item);
return `You dropped ${this.item}.`
       } else {
         return `You can't drop that.`;
       }
     }
    }

//roomDescription
   let north = new Direction(
     'north',
     undefined,
      `A weathered blue painted wood door with simple brass hardware, framed in a red brick building.
            Above the door a sign affixed to the building reads 'Bluebird Inn'.`,
    );

  let south = new Direction(
    'south',
    undefined,
     `A red brick wall, the back of a greeting card store.
            The graffiti scrawled across the brick reads "THE END OF THE WORLD IS NIGH!"`,
     )
  let east = new Direction(
    'east',
    undefined,
    `An alley chalked full of a zombie party milling about waiting for a snack to wander by.`,
    )

  let west = new Direction(
    'west',
    undefined,
    `An alley filling up with zombies that followed you from the lab.`,
    )

//valid action
let validAction = new Action(
  
)

//look
//   'look'(north) = console.log(description);
//   'look'(south) = console.log(description);
//   'look'(east) = console.log(description);
//   'look'(west) = console.log(description);
//go to
//   'go to'(door) = console.log('You are at the door.');
//   'go to'(north) = console.log('You run into the door.');
//   'go to'(east) = console.log('You are the appetizer at the zombie party') + process.exit();
//   'go to'(west) = console.log('You are eaten by the zombie hoard.') + process.exit();
//   'go to'(south) = console.log('While you were admiring the brick wall in all it\'s masonry glory, the zombies got between you and the door. Then you became diner.') + process.exit();
//go through
//   'go through'(frontDoor) = enterLobby + console.log('You open the door and quickly step inside the lobby. The door closes behind you.');
// pick up
//   'pick up'() = console.log('There are no items to pick up.');
// use
//   'use'() = console.log('you have no items in inventory.');
// inspect
//   'inspect'() = console.log('There is nothing to inspect.');
// drop
//   'drop'() = console.log('you have no items to drop.');


    //  let userAction = await ask(`What would you like to do?`);

    //  let inputArray = userAction.toLowerCase().split(' ');

    //  let validAction = inputArray[0];

    //  let target = inputArray.slice(1).join(' ');

    //  if (validAction === 'look') {
    //    return `${description}`
    //  }
  

   //loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }

//   doSomeAction()
 //}


//in front of the hotel. door to the north, brick wall to the south, zombie hoards east and west
//description:
//north: a weathered blue painted wood door with simple brass hardware, framed in a red brick building. 
//above the door a sign a fixed to the building reads 'Bluebird Inn'.
//south: a red brick wall, the back of a greeting card store.
//the graffiti scrawled across the brick reads 'the end of the world is nigh.'
//east: an alley full of a zombie party milling about waiting for a snack to wander by.
//west: an alley filling up with zombies that followed you from the lab.
//actions: 
//look in any direction; give description.
//go through door; enter lobby.
//go east or west; eaten by zombies.
//go south; the zombies gets between you and the door and you get eaten.
 // }
//} 











//individual room class room one
//class RoomOne {
//constructor(lobby) {
//let roomOneInventory = [];
//}
//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room one: entrance/lobby
//description:
//north: a door (to elevator hallway) centered on the wall. 
//an 'L' shaped check-in desk (key for elevator hallway door on shelf under desk) right of the door.
//south: a door (to alley).
//east: two planks of wood leaning in the corner (to be propped against door).
//west: a door (to kitchen) centered on wall. 
//a small worn sofa with a small coffee table in front of it. vacation brochures litter the top of the table.
//room items: 
//two planks of wood (used to barricade front door)
//key (used to unlock elevator hallway door)
//actions:
//look in any direction; give description.
//grab wood planks
//barricade door with wood planks
//inspect sofa and coffee table; you find out of date brochures for Vermont ski vacations from the 70's, 
//and a sticky dime in between the sofa cushions. (non movable items)
//inspect check-in desk; you find an empty cash box (non movable item) and a key (movable item).
//grab key
//go through north door; need key
//use key to unlock door; go through to elevator hallway.
//go through west door; enter kitchen
//if the front door is not barricaded with the planks of wood then, upon re-entry from the kitchen or the elevator hallway, 
//a zombie will have managed the front door and will be waiting for you in the lobby.
//stab zombie; you stab the zombie in the head, it spurts blood and falls over backwards over the coffee table.
//if you don't have the knife in your inventory; you have no weapon to defend yourself and the zombie overtakes you. the end
 
//}
 
//individual room class room two
//class RoomTwo {
//constructor(kitchen) {
//  let roomTwoInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room two: kitchen
//description:
//north: there is an island counter top in the middle of the kitchen attached to the wall.
//south: a cupboard, it's contents spread across the kitchen floor.
//east: a door (to lobby), 
//a refrigerator to the right of the door. it's contents also strewn about and the door left open cooling off the room.
//west: counter with in-set sink. an oven with stove top. 
//a magnetic knife strip on wall above sink with one large chef knife hanging.
//room items:
//chef knife (used to defend against zombies)
//actions:
//look in any direction; give description.
//inspect island counter top; a layer of flour, or dust, and what you hope is corn flakes covers the counter.
//you write your name in the mess with your finger just for posterity.
//inspect cupboard; a very surprised mouse jumps at your feet and scurries away faster than what direction you can tell.
//inspect refrigerator; something gooey and red is dripping from the top shelf. probably best not to linger.
//inspect counter; cockroaches abandon ship upon your approach. sink works. 
//gas stove appears to work but you have nothing to light it with. 
//there is a large chef knife hanging on the magnetic strip on the wall.
//grab knife
//go through door; enter lobby. 
//if the front door wasn't barricaded with the planks of wood, 
//then a zombie has managed the front door and is waiting for you in the lobby. 
//}
 
//individual room class room three
//class RoomThree {
//constructor(elevatorHallway) {
//let roomThreeInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room three: elevator hallway
//description:
//north: elevator door. a ten digit key pad on the wall to the right of the door (need code).
//south: a door (to lobby)
//east: a door (to floor one stairwell).
//west: hallway table for decor. a painting hanging on the wall above the table.
//actions: 
//look in any direction; give description
//go through lobby door; enter lobby
//if the front door wasn't barricaded with the planks of wood, 
//then a zombie has managed the front door and is waiting for you in the lobby.
//go through east door; enter first floor stairwell.
//inspect painting; depicts an Italian country side with a small farm house and barn in the distance. 
//in the bottom right corner a strip of paper is stuck in the frame with the number '9758' written on it.
//operate elevator; need code.
//enter code; elevator door dings and opens, enter elevator.
//}
 
//individual room class room four
//class RoomFour {
//constructor(firstFloorStairwell) {
//  let roomFourInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room four: first floor stairwell
//description:
//you have entered the first floor stairwell.
//zombies start falling down the stairs towards you.
//actions:
//if you don't have the knife in your inventory; you have no weapon to defend yourself and the zombies overtakes you. the end
//look in any direction; no time, the zombies are on you!
//run away/ go through door; enter elevator hallway.
//stab zombie; you stab the nearest zombie in the head. it goes limp and crumples over. the zombies keep coming. 
//(loop three times then the zombies are too many for you to kill and they overwhelm you. the end)
//}
 
//individual room class room five
//class RoomFive {
//constructor(elevator) {
//  let roomFiveInventory = [];
//} 

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room five: elevator
//description:
//north: an abstract painting is adhered to the elevator wall depicting triangles in the most fanciful positions.
//south: a simple up/ down arrow buttons to the left of the door. 
//east: unassuming elevator wall.
//west: unassuming elevator wall.
//actions:
//look in any direction; give description
//push up button; the elevator moves up to the second floor and the door opens exiting into the second floor hallway.
//push the down arrow; the door opens; exiting to the first floor elevator hallway.
//}
 
//individual room class room six
//class RoomSix {
//constructor(secondFloorHallway) {
//  let roomSixInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room six: second floor hallway
//description:
//north: from west to east; a stainless steel elevator door and a down arrow to the right of door.
//a white door with a number '1' on it (guestroom one). another white door with a number '2' on it (guestroom two)
//south: from west to east; a white door and a sign on the right that reads 'stairs' (second floor stairwell). 
//hallway table middle of hallway between the two doors.
//another white door with the number '3' on it (guestroom three) 
//east: a long hallway with a busy hallway runner with a dancing paisley pattern on it. 
//at the end of the hallway theres a white door with a red 'exit' sign above it.
//west: a blank white wall thats just begging for a painting to be hung.
//actions: 
//look in any direction; give description.
//inspect table; nothing on top, made of a dark colored wood.
//go to door of choice (elevator, door 1, door 2, door 3, stairs, or exit)
//go through door (door 1; unlocked, (enters guestroom one). door 2; locked, (no entry). 
//door 3; locked, opens with key card, (enters guestroom 3). stairs door; unlocked, (enters second floor stairwell).
//exit door; unlocked, (exits building and ends game.))
//push down arrow for elevator (the elevator door opens with a ding and you get into the elevator)
// move to; east, west of second floor hallway. 
//}
 
//individual room class room seven
//class RoomSeven {
//constructor(guestRoomOne) {
//  let roomSevenInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room seven: guestroom one
//description:
//north: a bed in the left corner with a nightstand next to it. a desk in the right corner with a desk chair pushed in to it.
// a dead body laying in a grizzly pose in the middle of the room.
//south: a door (enters second floor hallway)
//east: a blank wall with an abstract blood splatter mural spayed upon it
//west: a blank wall and a zombie in the left corner
//if you don't have the knife in your inventory; you have no weapon to defend yourself and the zombie overtakes you. the end
//room items:
//room key card
//actions: 
//look in any direction; give description.
//if west direction is not selected to look at then; there is a zombie in the left corner of room!
//if you don't have the knife in your inventory; you have no weapon to defend yourself and the zombie overtakes you. the end
//inspect body; its the missing scientist! looks like he was attacked by a zombie. 
//a large chunk of his neck is missing and hes laying contorted face down in a large pool of his own blood. 
//next to him theres a card.
//inspect bed; doesn't appear to have been slept in. maybe if it wasn't covered in blood you might think about taking a nap.
//inspect desk; nothing on top. drawers are empty.
//inspect zombie; he is very much upset that you interrupted his meal.
//stab zombie; you stab the zombie in the temple as he lunges at you. He strifes to the left and smacks into the east wall. 
//slides down the wall into a heap leaving a streak of blood completing the mosaic blood splatter that was already on the wall. 
//pick up card; appears to be a room key card. you put it in your pocket.
//go through door (enters second floor hallway).
//}
 
//individual room class room eight
//class RoomEight {
//constructor(guestRoomTwo) {
//  let roomEightInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room eight: guestroom two
//door is locked, no entry
//actions:
//use key card; nothing happens, must be for another room.
//break down door; you back up, rev up, and throw your whole body shoulder first at the door. 
//nothing gives and now your shoulder is throbbing. you look around in embarrassment grateful no one was around to see you. 
//but you swear you hear the door giggle ever so softly.
 
 
//}
 
//individual room class room nine
//class RoomNine {
//constructor(guestRoomThree) {
//  let roomNineInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room nine: guestroom three
//description:
//north: a door (enters second floor hallway). a backpack on the floor in the left corner.
//south: a bed in the right corner with a nightstand next to it. a desk in the left corner with a chair pulled out in front.
//east: blank wall
//west: blank wall
//room items:
//backpack
//laptop
//notes
//actions:
//go through door (enters second floor hallway)
//inspect backpack/ pick up backpack; an ordinary navy blue JanSport backpack. inside is a vile of pee yellow liquid. 
//the sample vaccine! you put the backpack on your shoulder.
//inspect bed; the covers have been pulled down like someone has slept in it. 
//hidden beneath the sheets there is a closed laptop with a stick on it that reads, 'i'm not a wizard, i'm a scientist!'.
//inspect computer/ pick up computer; this must be the scientists computer with all the formulas on it. 
//you slip it into the backpack.
//inspect desk; the draws are empty. the top of the desk is covered in paperwork.
//inspect paperwork/ pick up paperwork; upon a quick glance these are the scientist notes on how to build the fomula.
//you gather the papers into a neat stack and slide them in the backpack.
//}
 
//individual room class room ten
//class RoomTen {
//constructor(secondFloorStairwell) {
//  let roomTenInventory = [];
//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room ten: second floor stairwell
//description:
//you have entered the second floor stairwell.
//zombies start stumbling up the stairs towards you.
//actions:
//if you don't have the knife in your inventory; you have no weapon to defend yourself and the zombies overtakes you. the end
//look in any direction; no time, the zombies are on you!
//run away/ go through door; enter second floor hallway.
//stab zombie; you stab the nearest zombie in the head. it goes limp and crumples over. the zombies keep coming. 
//(loop three times then the zombies are too many for you to kill and they overwhelm you. the end) 
//}
 
//individual room class room eleven
//class RoomEleven {
//constructor(exit) {

//}

//loop 
     
//   while (playerResponse) {
//    await ask()
//     if action = validAction {
//       validAction = validAction 
  //     await ask();
//     }
//    else if validAction = go through() door to valid room {
//       then go to room and await ask();
//     } else {
//       console.log(Not a valid action) then await ask();
//     }
//     
//    
//       }
//room eleven: exit
//if backpack, laptop, and papers are in your personal inventory then; the game ends; you have saved the world! 
//just in time to, the zombies haven't figured out theres a back door yet!
//on to get this vital information to someone who knows what to do with it! 
//if all three items are not in your personal inventory then; the game ends and the door shuts and locks behind you. 
//you didn't grab the scientist's cure, notes or computer to share with the world.
//zombies are waiting at the bottom of the emergency exit stairs and they look mighty hangry. there's no escape. 
//no one finds what is left of the stain that was once you. 
//the cure has been lost forever and the world plunges into darkness. 
//}
 
 
 
 
 
//console.log('end');
 
//} 
 
//}
//process.exit();
}
  }
}
}
start()