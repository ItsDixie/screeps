var getResource = require('resourceManager')
var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	    }
	   if(creep.memory.upgrading){
            if(creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller)
            }
        }
        
        

    	else  {
                getResource.find1(creep, RESOURCE_ENERGY);
	    }
        
	    
    }
	
};

module.exports = roleUpgrader;