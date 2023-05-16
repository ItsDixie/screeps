var utils = require('utils');

var rolePicker = {
    run: function(creep, spawnname){
        
        if(creep.memory.picking && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.picking = false;
        }
        if(!creep.memory.picking && creep.store.getFreeCapacity() == 0) {
            creep.memory.picking = true;
        }
        
            if(creep.memory.picking){
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER ||
                                structure.structureType == STRUCTURE_STORAGE) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                        }
                    })
                
                if(targets.length > 0) {
                    if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        utils.path(creep, targets[0]);
                    }
                }
                    
                }else{
                    const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        utils.path(creep, target);
                    }
                }
           
    }
}


module.exports = rolePicker;