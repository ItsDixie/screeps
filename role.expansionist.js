let scout = require('role.scout')
let utils = require('utils')
var getResource = require('resourceManager')

let allowBuild = true

var expansionist = {
    run: function(creep) {
        if(!creep.memory.target) {
            try{
                scout.result(creep, 'Spawn1')
            }catch(err){
                console.log(err)
            }
        } else {
            if(creep.room.name != creep.memory.target){
                utils.explore(creep, creep.memory.target)
            }else{
                var builds = _.filter(Game.creeps, (creep) => creep.memory.type == 'build')
                var harvs = _.filter(Game.creeps, (creep) => creep.memory.type == 'harv')
                var upgs = _.filter(Game.creeps, (creep) => creep.memory.type == 'upg')
                console.log(harvs.length < 2 && creep.memory.type == undefined)
                if(harvs.length < 2 && creep.memory.type == undefined){
                    creep.memory.type = 'harv'
                }
                if(upgs.length < 1 && harvs.length > 1 && creep.memory.type == undefined){
                    creep.memory.type = 'upg'
                }
                if(builds.length < 1 && harvs.length > 1 && creep.memory.type == undefined){
                    creep.memory.type = 'build'
                }
                
                let sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES)
                let sources = creep.room.find(FIND_SOURCES)
                let energy = creep.room.find(FIND_DROPPED_RESOURCES)
                
                if(creep.memory.type == 'build'){
                    
                    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0 || sites.length == 0) {
                        creep.memory.building = false;
                    }
                    if(!creep.memory.building && creep.store.getFreeCapacity() == 0 && sites.length > 0 && allowBuild) {
                        creep.memory.building = true;
                    }
            
                    if(creep.memory.building) {
                            if(creep.build(sites[0]) == ERR_NOT_IN_RANGE){
                                utils.path(creep, sites[0])
                            }
                        
                    }else {
                            getResource.find1(creep, RESOURCE_ENERGY)
            
                    }
                }
                
                if(creep.memory.type == 'harv'){
                    
                    if(creep.store.getUsedCapacity() > 40){
                        creep.drop(RESOURCE_ENERGY, creep.store.getUsedCapacity())
                    }
                    
                    if(creep.harvest(sources[0]) == -9){
                            utils.path(creep, sources[0])
                    }
                          
                    }
                if(creep.memory.type == 'upg'){
                    if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
                        creep.memory.upgrading = false;
            	    }
            	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            	        creep.memory.upgrading = true;
            	    }
            	   if(creep.memory.upgrading){
                        if(creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            utils.path(creep, creep.room.controller)
                        }
                    
                    
                    
            
                	}else  {
                            getResource.find1(creep, RESOURCE_ENERGY);
            	    }
                }
            }
                

        }
    }
    
}

module.exports = expansionist
