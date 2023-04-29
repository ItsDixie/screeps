var roleScout = { /* need fix */
    run: function(creep){
        creep.memory.Rum
        creep.memory.Found
        
        const raw = Game.map.describeExits(creep.room.name);
        const roms = Object.values(raw);
        
    
        for(var rom in roms){
            const stats = Game.map.getRoomStatus(roms[rom]).status
            if(stats == 'novice' && !creep.memory.Found){
                var target = roms[rom] /* becoming undefined need fix */
                console.log(target)
                creep.memory.Rum = target
            }
        }
        if(creep.memory.Found){
            var target = creep.memory.Found
            if(creep.room.name == target){
                if(!creep.room.find(FIND_HOSTILE_STRUCTURES).length){
                    const result = creep.room;
                    if(creep.room.controller) {
                        if(creep.signController(creep.room.controller, 'Dixxe friendly expansion planned here!') == -9){
                            creep.moveTo(creep.room.controller);
                        }
                        if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller);
                        }
                    }
                    
                } else {
                    creep.memory.Found = false;
                }
            }else{
                var route = Game.map.findRoute(creep.room, target);
                const exit = creep.pos.findClosestByRange(route[0].exit);
                creep.moveTo(exit)
            }
        }
        
        if(creep.hits < creep.hitsMax){
            console.log(creep + ' has been damaged in ' + creep.room.name);
            Game.notify(creep + ' has been damaged in ' + creep.room.name);
            creep.memory.Found = false;
        }
    }
};

module.exports = roleScout;
