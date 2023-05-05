var roleScout = { /* need fix */
    run: function(creep){
        creep.memory.Rum
        creep.memory.Found
        
        const raw = Game.map.describeExits(creep.room.name);
        const roms = Object.values(raw);
        
        if(!creep.memory.Found){
            rand = Math.floor(Math.random() * roms.length)
            
            const stats = Game.map.getRoomStatus(roms[rand]).status
            if(stats == 'novice' && stats != 'closed' && !creep.memory.Found){
                creep.memory.Rum = roms[rand]
                creep.memory.Found = true
                console.log(creep.memory.Rum)
            }
        }
        
        if(creep.memory.Found){
            var target = creep.memory.Rum
            if(creep.room.name == target){
                creep.moveTo(creep.room.controller) /* REFACTOR FOR BETTER USE*/
                if(creep.room.find(FIND_HOSTILE_CREEPS).length == 0){
                    const result = creep.room;
                    if(creep.room.controller) {
                        if(creep.signController(creep.room.controller, 'Dixxe bot on github: https://github.com/ItsDixie/screeps Any help welcome!') == -9){
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
