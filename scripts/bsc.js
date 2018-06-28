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