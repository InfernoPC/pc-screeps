Creep.prototype.go_building = function(){
    var sites = this.room.find(FIND_CONSTRUCTION_SITES);
    if(sites.length){
        if(this.build(sites[0]) == ERR_NOT_IN_RANGE){
            this.moveTo(sites[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
};
Creep.prototype.go_harvesting = function(){
    var sources = this.room.find(FIND_SOURCES);
    if(this.harvest(sources[0]) == ERR_NOT_IN_RANGE){
        this.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
    }
    
};
Creep.prototype.go_storing = function(){
    var storages = this.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
        }
    });
    if(storages.length > 0){
        if(this.transfer(storages[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            this.moveTo(storages[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }else{
        // no empty storage, go upgrading
        this.go_upgrading();
    }
}
Creep.prototype.go_upgrading = function(){
    if(this.upgradeController(this.room.controller) == ERR_NOT_IN_RANGE){
        this.moveTo(this.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
    }
};




Creep.prototype.make_harvester_job = function(){
    if(this.carry.energy < this.carryCapacity){
        this.memory.job = "harvesting";
        this.say('🔄 harvest');
    }else{
        this.memory.job = "storing";
        this.say('store');
    }
    this.do_work();
};
Creep.prototype.make_builder_job = function(){
    if(this.carry.energy == 0){
        this.memory.job = "harvesting";
        this.say('🔄 harvest');
    }else if(this.carry.energy == this.carryCapacity){
        // find construction site for building
        if(this.room.find(FIND_CONSTRUCTION_SITES).length){
            this.memory.job = "building";
            this.say('🚧 build');
        }else{
            // nothing for building
            this.memory.job = "upgrading";
            this.say('⚡ upgrade');
        }
    }
    this.do_work();
};
Creep.prototype.make_upgrader_job = function(){
    if(this.carry.energy == 0){
        this.memory.job = "harvesting";
        this.say('🔄 harvest');
    }else if(this.carry.energy == this.carryCapacity){
        this.memory.job = "upgrading";
        this.say('⚡ upgrade');
    }
    this.do_work();
};

Creep.prototype.do_work = function(){
    switch(this.memory.job){
        case "harvesting":
            this.go_harvesting();
            break;
        case "building":
            this.go_building();
            break;
        case "upgrading":
            this.go_upgrading();
            break;
        case "storing":
            this.go_storing();
            break;
    }
};
Creep.prototype.working = function(){
    switch(this.memory.role){
        case "harvester":
            this.make_harvester_job();
            break;
        case "builder":
            this.make_builder_job();
            break;
        case "upgrader":
            this.make_upgrader_job();
            break;
    }
};
