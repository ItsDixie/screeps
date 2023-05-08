var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder')
var roleUpgrader = require('role.upgrader')
var rolePicker = require('role.picker')
var roleFixer = require('role.fixer')

var roleScout = require('role.scout')
var roleExpansionist = require('role.expansionist')

var roleAttacker = require('role.attacker')
var roleWaller = require('role.wallkeeper')
var pasDefense = require('passive.defense')

var respawn = require('respawner')
var autobuild = require('auto building')

/*
    Variables allowed to change: */
var allowExpand = true /* change to allow expand */

module.exports.loop = function () {
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
    var pickers = _.filter(Game.creeps, (creep) => creep.memory.role == 'picker')
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
    var fixers = _.filter(Game.creeps, (creep) => creep.memory.role == 'fixer')
    
    var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout')
    var expansionists = _.filter(Game.creeps, (creep) => creep.memory.role == 'expansionist')
    
    var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker')
    var wallkeepers = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallkeeper')
    
    for(var spuwn in Game.spawns){
        
        if(harvesters.length < 3 && !Game.spawns[spuwn].memory.attak) {
            var newName = 'HARVUNIT-' + Game.time;
            respawn.run('harvester', newName, spuwn)
            
        }
        if(pickers.length < 2 && harvesters.length > 0 && !Game.spawns[spuwn].memory.attak) {
            var newName = 'PICKUNIT-' + Game.time;
            respawn.run('picker', newName, spuwn)
            
        }
        if(upgraders.length < 3 && pickers.length > 0 && !Game.spawns[spuwn].memory.attak) {
            var newName = 'UPGRUNIT-' + Game.time;
            respawn.run('upgrader', newName, spuwn)
            
        }
        if(builders.length < 2 && upgraders.length > 1 && !Game.spawns[spuwn].memory.attak) {
            var newName = 'BUILDUNIT-' + Game.time;
            respawn.run('builder', newName, spuwn)
            
        }
        if(fixers.length < 1 && Game.spawns[spuwn].room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_TOWER}})[0].store[RESOURCE_ENERGY] < 100 && builders.length > 1 && !Game.spawns[spuwn].memory.attak) {
            var newName = 'FIXUNIT-' + Game.time;
            respawn.run('fixer', newName, spuwn)
            
        }
        if(wallkeepers.length < 2 && !Game.spawns[spuwn].memory.attak && Game.spawns[spuwn].room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_WALL}}).length > 1){
            var newName = 'WALLUNIT-' + Game.time;
            respawn.run('wallkeeper', newName, spuwn)
        }
        
        if(Game.gcl.level > Object.keys(Game.rooms).length && scouts.length < Game.gcl.level && !Game.spawns[spuwn].memory.attak && allowExpand){
            var newName = 'EXPLUNIT-' + Object.keys(Game.rooms).length
            respawn.run('scout', newName, spuwn)
            if(expansionists.length < 2){
                var newName = 'EXPANUNIT-' + Object.keys(Game.rooms).length
                respawn.run('expansionist', newName, spuwn)
            }
            
        }

        if(Game.spawns[spuwn].room.find(FIND_HOSTILE_CREEPS).length > 0 && attackers.length < (Game.spawns[spuwn].room.find(FIND_HOSTILE_CREEPS).length * 2)){
            Game.spawns[spuwn].memory.attak = true
            var newName = 'ATTACKUNIT-' + Game.time;
            respawn.run('attacker', newName, spuwn)
        }else{
            Game.spawns[spuwn].memory.attak = false
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
            rolePicker.run(creep, creep.room.find(FIND_MY_STRUCTURES, {filter:{structureType: STRUCTURE_SPAWN}})[0].name)
        }
        if(creep.memory.role == 'fixer'){
            roleFixer.run(creep)
        }
        if(creep.memory.role == 'scout'){
            roleScout.run(creep, 'Spawn1')
        }
        if(creep.memory.role == 'attacker'){
            roleAttacker.run(creep)
        }
        if(creep.memory.role == 'wallkeeper'){
            roleWaller.run(creep)
        }
        if(creep.memory.role == 'expansionist'){
            roleExpansionist.run(creep)
        }
    }
}