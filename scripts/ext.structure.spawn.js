var basic_worker_body = [WORK, CARRY, MOVE];
var large_worker_body = [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE];
var creeps_type = {
	harvester: {
		body: basic_worker_body,
		memory: {role: 'harvester'}
	},
	builder: {
		body: basic_worker_body,
		memory: {role: 'builder'}
	},
	upgrader: {
		body: basic_worker_body,
		memory: {role: 'upgrader'}
	},
	large_upgrader: {
		body: large_worker_body,
		memory: {role: 'upgrader'}
	}
};


StructureSpawn.prototype.spawn_harvester = function(name){
	return this.spawnCreep(creeps_type.harvester.body, name, {memory: creeps_type.harvester.memory});
};
StructureSpawn.prototype.spawn_builder = function(name){
	return this.spawnCreep(creeps_type.builder.body, name, {memory: creeps_type.builder.memory});
};
StructureSpawn.prototype.spawn_upgrader = function(name){
	return this.spawnCreep(creeps_type.upgrader.body, name, {memory: creeps_type.upgrader.memory});
};
StructureSpawn.prototype.spawn_large_upgrader = function(name){
	return this.spawnCreep(creeps_type.large_upgrader.body, name, {memory: creeps_type.large_upgrader.memory});
};
