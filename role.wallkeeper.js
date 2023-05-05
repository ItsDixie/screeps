var utils = require('utils');
var getResource = require('resourceManager')

var wallKeeper = {
    run: function(creep){
        
        var walls = creep.room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_WALL}})
        var ramparts = creep.room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_RAMPART}})
        
	    if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {   /* <- look here for optimise road using */
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) { /* <- look here for optimise road using */
	        creep.memory.repairing = true;
	    }
	    
	    if(creep.memory.repairing){
	        for(var wall in walls){
	            if(walls[wall].hits < 30000){     /* <- look here for handle big hp walls */
                    try{
                        if(creep.moveByPath(Room.deserializePath(creep.memory.path)) == -5){
                            utils.path(creep, walls[wall])
                        }
                        
            
                        if(creep.repair(walls[wall]) == -9) {
                            creep.moveByPath(Room.deserializePath(creep.memory.path))
                        }
                    } catch(err){
                        if(err){
                            utils.path(creep, walls[wall])
                        }
                    }
	            
	            }
	        }
	        for(var rampart in ramparts){                /* <- ramparts don't fixing, probably bad priority and decaying */
	            if(ramparts[rampart].hits < 1000){
                    try{
                        if(creep.moveByPath(Room.deserializePath(creep.memory.path)) == -5){
                            utils.path(creep, ramparts[rampart])
                        }
            
                        if(creep.repair(ramparts[rampart]) == -9) {
                            creep.moveByPath(Room.deserializePath(creep.memory.path))
                        }
                    } catch(err){
                        if(err){
                            utils.path(creep, ramparts[rampart])
                        }
                    }
	            
	            }
	        }
	    }else{
            getResource.find1(creep, RESOURCE_ENERGY);    /* <- look here for optimise road using */
	    }
        
    }
}

module.exports = wallKeeper

