module.exports = {
    max_harvester_size: 3,
    max_builder_size: 3,
    max_upgrader_size: 1,
    max_large_harvester_size: 2,
    max_large_builder_size: 2,
    max_large_upgrader_size: 2,

    basic_worker_body: [WORK, CARRY, MOVE],
    large_worker_body: [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE],
    
};