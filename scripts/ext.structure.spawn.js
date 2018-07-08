require("bsc");
var config = require("config");

var creeps_type = {
	harvester: {
		body: config.basic_worker_body,
		memory: {role: 'harvester'}
	},
	builder: {
		body: config.basic_worker_body,
		memory: {role: 'builder'}
	},
	upgrader: {
		body: config.basic_worker_body,
		memory: {role: 'upgrader'}
	},
	large_upgrader: {
		body: config.large_worker_body,
		memory: {role: 'upgrader'}
	},
	large_builder: {
		body: config.large_worker_body,
		memory: {role: 'builder'}
	},
	large_harvester: {
		body: config.large_worker_body,
		memory: {role: 'harvester'}
	}
};

// spawnCreep
StructureSpawn.prototype.spawn_harvester = function(){
	var name = "pc_h_" + (Game.time % 10000);
	if(this.spawnCreep(creeps_type.harvester.body, name, {memory: creeps_type.harvester.memory}) == OK){
		console.log("new harvester spawned: " + name);
	};
};
StructureSpawn.prototype.spawn_builder = function(){
	var name = "pc_b_" + (Game.time % 10000);
	if(this.spawnCreep(creeps_type.builder.body, name, {memory: creeps_type.builder.memory}) == OK){
		console.log("new builder spawned: " + name);
	};
};
StructureSpawn.prototype.spawn_upgrader = function(){
	var name = "pc_u_" + (Game.time % 10000);
	if(this.spawnCreep(creeps_type.upgrader.body, name, {memory: creeps_type.upgrader.memory}) == OK){
		console.log("new upgrader spawned: " + name);
	};
};
StructureSpawn.prototype.spawn_large_harvester = function(){
	var name = "pc_lh_" + (Game.time % 10000);
	if(this.spawnCreep(creeps_type.large_harvester.body, name, {memory: creeps_type.large_harvester.memory}) == OK){
		console.log("new large_harvester spawned: " + name);
	};
};
StructureSpawn.prototype.spawn_large_builder = function(){
	var name = "pc_lb_" + (Game.time % 10000);
	if(this.spawnCreep(creeps_type.large_builder.body, name, {memory: creeps_type.large_builder.memory}) == OK){
		console.log("new large_builder spawned: " + name);
	};
};
StructureSpawn.prototype.spawn_large_upgrader = function(){
	var name = "pc_lu_" + (Game.time % 10000);
	if(this.spawnCreep(creeps_type.large_upgrader.body, name, {memory: creeps_type.large_upgrader.memory}) == OK){
		console.log("new large_upgrader spawned: " + name);
	};
};


// spawn strategy
StructureSpawn.prototype.operate = function(){
    var harvesters = _.all_harvesters();
    var builders = _.all_builders();
    var upgraders = _.all_upgraders();
    var large_harvesters = _.all_large_harvesters();
    var large_builders = _.all_large_builders();
    var large_upgraders = _.all_large_upgraders();

    if(!this.spawning){
    	if(upgraders.length == 0){ // at least one upgrader
    		this.spawn_upgrader();
    	}else if(this.room.energyAvailable > 500 && large_harvesters.length < config.max_large_harvester_size){
    		this.spawn_large_harvester();
    	}else if(this.room.energyAvailable > 500 && large_builders.length < config.max_large_builder_size){
    		this.spawn_large_builder();
    	}else if(this.room.energyAvailable > 500 && large_upgraders.length < config.max_large_upgrader_size){
    		this.spawn_large_upgrader();
    	}else if(harvesters.length < config.max_harvester_size){
    		this.spawn_harvester();
    	}else if(builders.length < config.max_builder_size){
    		this.spawn_builder();
    	}else if(upgraders.length < config.max_upgrader_size){
    		this.spawn_upgrader();
    	}
    }

}
