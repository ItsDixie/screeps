let path = false
let expath = false
var utils = {
    path: function(creep, target){
        if(!path){
            path = creep.room.findPath(creep.pos, target.pos, {ignoreCreeps:false, range:1})
            let dest = path.slice(-1)
            creep.memory.path = String(Room.serializePath(path))
        }
        try{
            if(Game.time % 5 == 0){  
                path = false
            }
            creep.moveByPath(Room.deserializePath(creep.memory.path))
        }catch (err){
            path = false
            utils.path(creep, target)
        }
    },
    
    explore: function(creep, target){
        if(!expath){
            expath = creep.pos.findPathTo(target)
            creep.memory.path = String(Room.serializePath(expath))
        }
        try{
            if(Game.time % 5 == 0){  
                expath = false
            }
            creep.moveByPath(Room.deserializePath(creep.memory.path))
        }catch (err){
            expath = false
            utils.explore(creep, target)
        }
    }
}

module.exports = utils