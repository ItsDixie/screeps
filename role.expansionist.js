let scout = require('role.scout')
let utils = require('utils')

var expansionist = {
    run: function(creep) {
        if(!creep.memory.target) {
            try{
            scout.result(creep, 'Spawn1')
            }catch(err){
                console.log(err)
            }
        } else {
            utils.explore(creep, creep.memory.target)
            if(creep.room.name == creep.memory.target){
                let sites = creep.room.find(FIND_CONSTRUCTION_SITES)
                let sources = creep.room.find(FIND_SOURCES)
                let energy = creep.room.find(FIND_DROPPED_RESOURCES)
                if(sites.length > 0 && energy.length > 0 || creep.store.getFreeCapacity() == 0){
                    creep.memory.role = 'builder'
                    console.log('Switch mode to builder')
                }
                if(sources.length > 0 && energy.length == 0){
                    creep.memory.role = 'harvester'
                    console.log('Switch mode to harvester')
                }
                if(creep.room.find(FIND_MY_STRUCTURES, {filter:{structureType: STRUCTURE_SPAWN}}).length > 0 && sites.length == 0 && energy.length > 0 || creep.store.getFreeCapacity() == 0){
                    creep.memory.role = 'picker'
                    console.log('Switch mode to picker')
                }
            }
        }
    }
}

module.exports = expansionist
