var lib = require('lib');

module.exports.loop = function () {

    _.gc();
    _.show_dashboard();
    
    // creeps
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(!Game.spawns['pc_spawn'].spawning && upgraders.length < lib.config.max_upgrader_size){
        var new_name = "pcu" + (Game.time % 1000);
        if(Game.spawns['pc_spawn'].spawn_upgrader(new_name) == OK){
            console.log("new upgrader spawned: " + new_name);
        }
    }
    if(!Game.spawns['pc_spawn'].spawning && harvesters.length < lib.config.max_harvester_size){
        var new_name = "pch" + (Game.time % 1000);
        if(Game.spawns['pc_spawn'].spawn_harvester(new_name) == OK){
            console.log("new harvester spawned: " + new_name);
        }
    }
    if(!Game.spawns['pc_spawn'].spawning && builders.length < lib.config.max_builder_size){
        var new_name = "pcb" + (Game.time % 1000);
        if(Game.spawns['pc_spawn'].spawn_builder(new_name) == OK){
            console.log("new builder spawned: " + new_name);
        }
    }
    if( Game.spawns['pc_spawn'].room.energyAvailable > 500 && !Game.spawns['pc_spawn'].spawning && builders.length < lib.config.max_large_upgrader_size){
        var new_name = "pclu" + (Game.time % 1000);
        if(Game.spawns['pc_spawn'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], new_name, {memory: {role: 'upgrader'}}) == OK){
            console.log("new builder spawned: " + new_name);
        }
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.order){
            creep.action();
        }else{
            Game.creeps[name].work();
        }
    }


    // towers
    var towers = _.filter(Game.structures, (structure) => structure.structureType == STRUCTURE_TOWER);
    for(var id in towers){
        var tower = towers[id];
        tower.scout();
    }

}