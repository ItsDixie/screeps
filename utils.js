var utils = {
    path: function(creep, target){
        let path = creep.room.findPath(creep.pos, target.pos)
        creep.memory.path = Room.serializePath(path)
    }
}

module.exports = utils