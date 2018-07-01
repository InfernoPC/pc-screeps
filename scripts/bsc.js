_.display_creeps = function(){
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        console.log(name + ": " + creep.memory.role);
    }
    // console.log(_.creeps_info());
    return OK;
};

_.gc = function(){
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    return OK;
};

_.all_harvesters = function(){
    return _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.body.length == 3);
};
_.all_builders = function(){
    return _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.body.length == 3);
};
_.all_upgraders = function(){
    return _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.body.length == 3);
};
_.all_large_upgraders = function(){
    return _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.body.length == 7);
}