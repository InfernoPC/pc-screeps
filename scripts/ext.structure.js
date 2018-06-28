if(!Structure.prototype._spawnCreep){
    Structure.prototype._spawnCreep = Structure.prototype.spawnCreep;
    Structure.prototype.spawnCreep = function(body, name, creepMemory){
        var creep = this._spawnCreep(body, name, creepMemory);
        if(creep == OK){
            console.log("a new " + this.memory.role + " is spawned: " + this.name);
        }
        return creep;
    };
}


Structure.prototype.create_harvester = function(name){
    return this.spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'harvester'}});
};
Structure.prototype.create_builder = function(name){
    return this.spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'builder'}});
};
Structure.prototype.create_upgrader = function(name){
    return this.spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'upgrader'}});
};



module.exports = {

};