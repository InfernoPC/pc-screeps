Creep.prototype.goto_pos = function(x, y){
  this.memory.order = "goto_pos";
  this.memory.goto_x = x;
  this.memory.goto_y = y;
  return OK;
};
// Creep.prototype.goto_room_pos = function(room_pos){
//   this.memory.order = "goto_room_pos";
//   this.memory.goto_room_pos = room_pos;
//   return OK;
// };


Creep.prototype.action = function(){
  switch(this.memory.order){
    case "goto_pos":
      if(this.pos.x == this.memory.goto_x && this.pos.y == this.memory.goto_y){
        // goal
        delete this.memory.order;
        delete this.memory.goto_x;
        delete this.memory.goto_y;
      }else{
        this.moveTo(this.memory.goto_x, this.memory.goto_y);
        this.say('moving');
      }
      break;
    // case "goto_room_pos":
    //   if(this.pos == this.memory.goto_room_pos){
    //     // goal
    //     delete this.memory.order;
    //     delete this.memory.goto_room_pos;
    //   }else if(this.pos.roomName != this.memory.goto_room_pos.roomName){
    //     var goto_exit = this.room.findExitTo(this.memory.goto_room_pos.roomName);
    //     this.moveTo(this.memory.goto_room_pos);
    //     this.say('moving');
    //   }
    //   break;
  }
};





