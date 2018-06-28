StructureSpawn.prototype.spawn_harvester = function(name){
    return this.spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'harvester'}});
};
StructureSpawn.prototype.spawn_builder = function(name){
    return this.spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'builder'}});
};
StructureSpawn.prototype.spawn_upgrader = function(name){
    return this.spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'upgrader'}});
};
