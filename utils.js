let path = false
let expath = false
var utils = {
    path: function(creep, target){
        if(!path){
            puth = creep.room.findPath(creep.pos, target.pos, {ignoreCreeps:false, range:1})
            let dest = puth.slice(-1)
            creep.memory.puth = String(Room.serializePath(puth))
        }
        try{
            if(Game.time % 2 == 0){  
                path = false
            }
            creep.moveByPath(Room.deserializePath(creep.memory.puth))
        }catch (err){
            path = false
            utils.path(creep, target)
        }
    },
    
    explore: function(creep, target){
        if(!expath){
            expath = creep.pos.findPathTo(target)
            creep.memory.puth = String(Room.serializePath(expath))
        }
        try{
            if(Game.time % 5 == 0){  
                expath = false
            }
            creep.moveByPath(Room.deserializePath(creep.memory.puth))
        }catch (err){
            expath = false
            utils.explore(creep, target)
        }
    }
}

module.exports = utils