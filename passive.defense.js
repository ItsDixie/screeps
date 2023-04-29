const defense = {
    run: function(spuwn){
        const towers = spuwn.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        for(var tower in towers){
            var closestHostile = towers[tower].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[tower].attack(closestHostile);
            }
        }
    }
}

module.exports = defense;
