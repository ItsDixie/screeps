var utils = require('utils');
var getResource = require('resourceManager')

var wallKeeper = {
    run: function(creep){
        
        var walls = creep.room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_WALL}})
        var ramparts = creep.room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_RAMPART}})
        
	    if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.repairing = true;
	    }
	    
	    if(creep.memory.repairing){
	        for(var wall in walls){
	            if(walls[wall].hits < 1000){
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
	        for(var rampart in ramparts){
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
            getResource.find1(creep, RESOURCE_ENERGY);
            if(creep.store.getFreeCapacity() == 0){
                creep.moveTo(creep.room.controller)
            }
	    }
        
    }
}

module.exports = wallKeeper

