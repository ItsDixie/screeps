const defense = {
    run: function(spuwn){
        const towers = spuwn.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        for(var tower in towers){
            var closestHostile = towers[tower].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[tower].attack(closestHostile);
            }
            
           var strct = towers[0].room.find(FIND_STRUCTURES, {
                 filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_ROAD ||
                            structure.structureType == STRUCTURE_CONTAINER)
                        }
                    })
            
            for(var damaged in strct){
	             if(strct[damaged].hits < strct[damaged].hitsMax){
	                 target = strct[damaged]
	                 towers[tower].repair(target)
	             }
            }
            
            
        }
    }
}

module.exports = defense;
