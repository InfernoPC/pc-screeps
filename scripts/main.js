var lib = require('lib');

module.exports.loop = function () {

    _.gc();
    _.show_dashboard();
    
    // spawns
    Game.spawns['pc_spawn'].operate();

    // var harvesters = _.all_harvesters();
    // var builders = _.all_builders();
    // var upgraders = _.all_upgraders();
    // var large_upgaders = _.all_large_upgraders();

    // if(!Game.spawns['pc_spawn'].spawning && upgraders.length < lib.config.max_upgrader_size){
    //     if(Game.spawns['pc_spawn'].spawn_upgrader() == OK){
    //         console.log("new upgrader spawned: ");
    //     }
    // }
    // if(!Game.spawns['pc_spawn'].spawning && harvesters.length < lib.config.max_harvester_size){
    //     if(Game.spawns['pc_spawn'].spawn_harvester() == OK){
    //         console.log("new harvester spawned: ");
    //     }
    // }
    // if(!Game.spawns['pc_spawn'].spawning && builders.length < lib.config.max_builder_size){
    //     if(Game.spawns['pc_spawn'].spawn_builder() == OK){
    //         console.log("new builder spawned: ");
    //     }
    // }
    // if( Game.spawns['pc_spawn'].room.energyAvailable > 500 && !Game.spawns['pc_spawn'].spawning && large_upgaders.length < lib.config.max_large_upgrader_size){
    //     if(Game.spawns['pc_spawn'].spawn_large_upgrader() == OK){
    //         console.log("new builder spawned: ");
    //     }
    // }
    // creeps
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