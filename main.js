var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder')
var roleUpgrader = require('role.upgrader')
var rolePicker = require('role.picker')
var roleFixer = require('role.fixer')
var roleScout = require('role.scout')
var pasDefense = require('passive.defense')

var respawn = require('respawner')
var autobuild = require('auto building')

module.exports.loop = function () {
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
    var pickers = _.filter(Game.creeps, (creep) => creep.memory.role == 'picker')
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
    var fixers = _.filter(Game.creeps, (creep) => creep.memory.role == 'fixer')
    var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout')
    
    for(var spuwn in Game.spawns){
        
        if(harvesters.length < 3) {
            var newName = 'Harvester' + Game.time;
            respawn.run('harvester', newName, spuwn)
            
        }
        if(pickers.length < 2 && harvesters.length > 0) {
            var newName = 'Picker' + Game.time;
            respawn.run('picker', newName, spuwn)
            
        }
        if(upgraders.length < 3 && pickers.length > 0) {
            var newName = 'Upgrader' + Game.time;
            respawn.run('upgrader', newName, spuwn)
            
        }
        if(builders.length < 2 && upgraders.length > 1) {
            var newName = 'Builder' + Game.time;
            respawn.run('builder', newName, spuwn)
            
        }
        if(fixers.length < 2 && builders.length > 0) {
            var newName = 'Fixer' + Game.time;
            respawn.run('fixer', newName, spuwn)
            
        }
        if(Game.gcl > Object.keys(Game.rooms).length && scouts.length < 1){
            var newName = 'Scout' + Object.keys(Game.rooms).length
            respawn.run('scout', newName, spuwn)
        }
    
        autobuild.SPAWNroads(Game.spawns[spuwn])
        pasDefense.run(Game.spawns[spuwn])
        
    }
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }



    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep)
        }
        if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep)
        }
        if(creep.memory.role == 'picker'){
            rolePicker.run(creep)
        }
        if(creep.memory.role == 'fixer'){
            roleFixer.run(creep)
        }
        if(creep.memory.role == 'scout'){
            roleScout.run(creep)
        }
    }
}