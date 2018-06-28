StructureController.prototype.info = function(){
  return `${this.pos.roomName} (${this.progress}/${this.progressTotal}) (${this.ticksToDowngrade})`;
};