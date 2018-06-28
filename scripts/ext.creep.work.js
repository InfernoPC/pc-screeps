// ====================================== useful tool
Creep.prototype.energy_info = function(){
    return `(${this.carry.energy}/${this.carryCapacity})`;
}

Creep.prototype.info = function(){
    return `${this.memory.role} ${this.name} (${this.hits}/${this.hitsMax}) (${this.ticksToLive}): ${this.memory.task} ${this.energy_info()}`;
}
// ====================================== find something
Creep.prototype.find_sites = function(){
    return this.room.find(FIND_CONSTRUCTION_SITES);
};
Creep.prototype.find_storages = function(){
    return this.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
        }
    });
};
Creep.prototype.find_resources = function(){
    return this.room.find(FIND_SOURCES);
};

// ====================================== go_doing work
Creep.prototype.go_building = function(){
    var sites = this.find_sites();
    if(sites.length){
        if(this.build(sites[0]) == ERR_NOT_IN_RANGE){
            this.moveTo(sites[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
};
Creep.prototype.go_harvesting = function(){
    var sources = this.find_resources();
    if(this.harvest(sources[0]) == ERR_NOT_IN_RANGE){
        this.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
    }
    
};
Creep.prototype.go_storing = function(){
    var storages = this.find_storages();
    if(storages.length){
        if(this.transfer(storages[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            this.moveTo(storages[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }else{
        // no empty storage, go upgrading
        this.memory.task = "upgrading";
    }
}
Creep.prototype.go_upgrading = function(){
    if(this.upgradeController(this.room.controller) == ERR_NOT_IN_RANGE){
        this.moveTo(this.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
    }
};

// ====================================== what to do
Creep.prototype.do_harvester_work = function(){
    if(this.carry.energy == 0){
        this.memory.task = "harvesting";
    }else if(this.carry.energy == this.carryCapacity){
        this.memory.task = "storing"
    }
    this.do_task();
};
Creep.prototype.do_builder_work = function(){
    if(this.carry.energy == 0){
        this.memory.task = "harvesting";
    }else if(this.carry.energy == this.carryCapacity){
        // find construction site for building
        var sites = this.find_sites();
        if(sites.length){
            this.memory.task = "building";
        }else{
            this.memory.task = "upgrading";
        }
    }
    this.do_task();
};
Creep.prototype.do_upgrader_work = function(){
    if(this.carry.energy == 0){
        this.memory.task = "harvesting";
    }else if(this.carry.energy == this.carryCapacity){
        this.memory.task = "upgrading";
    }
    this.do_task();
};

// ====================================== 
Creep.prototype.do_task = function(){
    this["go_" + this.memory.task]();
};
Creep.prototype.work = function(){
    this["do_" + this.memory.role + "_work"]();
    this.say(this.memory.task);
};
