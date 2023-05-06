var attacker = {
    run: function(creep){
        var targets = creep.room.find(FIND_HOSTILE_CREEPS);
        if(targets.length > 0){
            if(creep.attack(targets[0]) == -9 || creep.rangedAttack(targets[0]) == -9){ 
                creep.moveTo(targets[0])
                creep.say("Intruder!", {public: true})
            }
        }else{
            creep.suicide()
        }
    }
}

module.exports = attacker;
