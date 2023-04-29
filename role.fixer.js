var getResource = require('resourceManager')
let target
var roleFixer = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.repairing = true;
	    }

	    if(creep.memory.repairing) {
	        var constrcts = creep.room.find(FIND_STRUCTURES)
	         for(var constrt in constrcts){
	             if(constrcts[constrt].hits < constrcts[constrt].hitsMax){
	                 target = constrcts[constrt]
	             }
  
	         }
            if(creep.repair(target) == ERR_NOT_IN_RANGE){
                creep.moveTo(target)
                
            }
	    }else {
	        getResource.find1(creep, RESOURCE_ENERGY);
            
            
	   }
	}
}

module.exports = roleFixer;
