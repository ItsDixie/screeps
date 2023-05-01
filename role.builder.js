var getResource = require('resourceManager')
var utils = require('utils');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);

        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0 || targets.length == 0) {
            creep.memory.building = false;
        }
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0 && targets.length > 0) {
            creep.memory.building = true;
        }

        if(creep.memory.building) {
            if(creep.moveByPath(Room.deserializePath(creep.memory.path)) == -5){
                utils.path(creep, targets[0])
            }

            if(creep.build(targets[0]) == -9) {
                (creep.moveByPath(Room.deserializePath(creep.memory.path)))
            }
            
        }
        else {
            if(creep.store[RESOURCE_ENERGY] == 0){
                getResource.find1(creep, RESOURCE_ENERGY);
            }

        }
    }

            
};  


module.exports = roleBuilder;
