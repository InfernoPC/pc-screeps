_.dashboard = function(){
    
    var count = 0;
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        var msg = creep.memory.role + " " + creep.name + ": " + creep.memory.job;
        Game.spawns['pc_spawn'].room.visual.text(msg, 0, 1+count, {color: 'lightgrey', align: 'left'});
        count += 1;
    }
    
};