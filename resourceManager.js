var utils = require('utils');

var ResourceM = {
  find1: function(creep, resourc){
      creep.memory.targetFound = false
    var storag = creep.room.find(FIND_STRUCTURES);
    let target;
    for(var i in storag){
        if(storag[i]){
            if(storag[i].structureType == 'spawn' || storag[i].structureType == 'extension' || storag[i].structureType == 'tower'){
                delete storag[i]
            }
            var short = creep.withdraw(storag[i], resourc, creep.getFreeCapacity)   /* с горем по-полам, но работает */
            var shortT = creep.withdraw(target, resourc, creep.getFreeCapacity)
            if(short != -7 && short != -6 && short != -4){
                if(storag[i].store[resourc]){
                    target = storag[i];
                    creep.memory.targetFound = true
                }
              
              
              if(creep.withdraw(target, resourc, creep.getFreeCapacity) == ERR_NOT_IN_RANGE){
                creep.moveTo(target)
              }
              
              if(shortT == -6){
                  creep.memory.targetFound = false
              }
              
            }
                
                
            
        }
      }
    if(creep.memory.targetFound == false){
        target = creep.room.find(resourc);
        if(creep.harvest(resourc) == ERR_NOT_IN_RANGE && creep.harvest(resourc) != -7){
                creep.moveTo(resourc);
                
        }else{
                target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES)
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                    
                }
                
            }
    }
    
    
  }
};

module.exports = ResourceM;