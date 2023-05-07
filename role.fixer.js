var getResource = require('resourceManager')
let target
var roleFixer = {

    run: function(creep) {

	    if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.repairing = true;
	    }

	    if(creep.memory.repairing) {
            var constrcts = creep.room.find(FIND_STRUCTURES, {
                     filter: (structure) => {
                        return (structure.structureType == STRUCTURE_STORAGE ||
                                structure.structureType == STRUCTURE_ROAD ||
                                structure.structureType == STRUCTURE_CONTAINER)
                            }
                        })
	         for(var constrt in constrcts){
	             if(constrcts[constrt].hits < constrcts[constrt].hitsMax){
	                 target = constrcts[constrt]
	             }
  
	         }
	         if(target){
                if(creep.repair(target) == ERR_NOT_IN_RANGE){
                    creep.moveTo(target)
                }
	         }else{
	             creep.moveTo(creep.room.controller)
	         }
	    }else {
	        getResource.find1(creep, RESOURCE_ENERGY)
            
            
	   }
	}
}

module.exports = roleFixer;
