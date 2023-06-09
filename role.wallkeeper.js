var utils = require('utils');
var getResource = require('resourceManager')

var wallKeeper = {
    run: function(creep){
        
        var walls = creep.room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_WALL}})
        
	    if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {   /* <- look here for optimise road using */
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) { /* <- look here for optimise road using */
	        creep.memory.repairing = true;
	    }
	    
	    if(creep.memory.repairing){
	        for(var wall in walls){
	            if(walls[wall].hits < 20000){     /* <- look here for handle big hp walls */
                    if(creep.repair(walls[wall]) == -9){
                        utils.path(creep, walls[wall])
                    }
	            
	            }
	        }

	    }else{
            getResource.find1(creep, RESOURCE_ENERGY);    /* <- look here for optimise road using */
	    }
        
    }
}

module.exports = wallKeeper

