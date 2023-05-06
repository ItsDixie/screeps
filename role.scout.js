let badRooms = []

var roleScout = { /* need fix */
    run: function(creep, spuwn){
        creep.memory.Rum
        creep.memory.Found
        creep.memory.BadRooms
        creep.memory.BornRoom = Game.spawns[spuwn].room.name
        
        const raw = Game.map.describeExits(creep.room.name);
        const roms = Object.values(raw);
        

        if(creep.memory.Found){
            var target = creep.memory.Rum
            if(creep.room.name == target){
                if(creep.room.controller){
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
                        badRooms.push(creep.room.name)
                        creep.memory.BadRooms = badRooms
                        }
                } else{
                    creep.memory.Found = false;
                }
            }else{
                var route = Game.map.findRoute(creep.room, creep.memory.Rum);
                const exit = creep.pos.findClosestByRange(route[0].exit);
                creep.moveTo(exit)
            }
        }else{
            rand = Math.floor(Math.random() * roms.length)
            
            const stats = Game.map.getRoomStatus(roms[rand]).status
            if(stats == 'novice' && stats != 'closed' && !badRooms.includes(roms[rand]) && creep.memory.BornRoom != roms[rand] && !creep.memory.Found){
                creep.memory.Rum = roms[rand]
                creep.memory.Found = true
                console.log(creep.memory.Rum)
            }
        }
        
        if(creep.hits < creep.hitsMax){
            console.log(creep + ' has been damaged in ' + creep.room.name);
            Game.notify(creep + ' has been damaged in ' + creep.room.name);
            creep.memory.Found = false;
            badRooms.push(creep.room.name)
        }
    }
};

module.exports = roleScout;
