var rolePicker = {
    run: function(creep, spawnname){
        
        if(creep.memory.picking && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.picking = false;
        }
        if(!creep.memory.picking && creep.store.getFreeCapacity() == 0) {
            creep.memory.picking = true;
        }
        
        const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
        if(target) {
            if(creep.memory.picking){
                if(!Game.spawns[spawnname].memory.attak){
                    if(Game.spawns[spawnname].energy < Game.spawns[spawnname].energyCapacity) {                   /* FIX TO CUSTOM SPAWN NAME NEEDED */
                        if(creep.transfer(Game.spawns[spawnname], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(Game.spawns[spawnname]);    
                        }
                    } else {
                        var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_EXTENSION ||
                                        structure.structureType == STRUCTURE_SPAWN ||
                                        structure.structureType == STRUCTURE_TOWER ||
                                        structure.structureType == STRUCTURE_CONTAINER) && 
                                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                            }
                        })
                        if(targets.length > 0) {
                            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets[0]);
                            }
                        }
                    }
                }else{
                        var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_SPAWN ||
                                        structure.structureType == STRUCTURE_TOWER) && 
                                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                            }
                        })
                        
                        if(targets.length > 0) {
                            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets[0]);
                            }
                        }
                }
            } else {
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                } 
            }
        }
    }
};

module.exports = rolePicker;