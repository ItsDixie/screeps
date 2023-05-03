var attacker = {
    run: function(creep){
        var targets = creep.room.find(FIND_HOSTILE_CREEPS)
        creep.attack(targets[0])
    }
}

module.exports = attacker