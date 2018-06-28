_.show_dashboard = function(){
    
    var l_u_count = 0;
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        Game.spawns['pc_spawn'].room.visual.text(creep.info(), 0, 1+l_u_count, {color: 'lightgrey', align: 'left'});
        l_u_count += 1;
    }
    
    var r_u_count = 0;
    for(var name in Game.spawns){
      var controller = Game.spawns[name].room.controller;
      Game.spawns['pc_spawn'].room.visual.text(controller.info(), 48, 1+r_u_count, {color: 'lightgrey', align: 'right'});
    }
};