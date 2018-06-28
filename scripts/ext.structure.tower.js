

StructureTower.prototype.find_enemy = function(){
  return this.room.find(FIND_HOSTILE_CREEPS);
};
StructureTower.prototype.find_injury = function(){
  return this.room.find(FIND_MY_CREEPS, {filter: (creep) => creep.hits < creep.hitsMax});
};
StructureTower.prototype.find_destruction = function(){
  return this.room.find(FIND_MY_STRUCTURES, {filter: (structure) => structure.hits < structure.hitsMax})
};









StructureTower.prototype.scout = function(){
  var enemies = this.find_enemy();
  if(enemies.length){
    return this.attack(enemies[0]);
  }

  var injuries = this.find_injury();
  if(injuries.length){
    return this.heal(injuries[0]);
  }

  var destructions = this.find_destruction();
  if(destructions.length && this.energy > (this.energyCapacity/2)){
    return this.repair(destructions[0]);
  }
}