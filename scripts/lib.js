/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('lib');
 * mod.thing == 'a thing'; // true
 */
require('bsc');
require('dashboard');
require("ext");

module.exports = {
    config: require("config"),
    
};