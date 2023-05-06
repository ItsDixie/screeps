const defense = {
    run: function(spuwn){
        const towers = spuwn.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        
        if(towers.length > 0){   
            var ramparts = towers[0].room.find(FIND_STRUCTURES, {filter:{structureType: STRUCTURE_RAMPART}})
        

            var strct = towers[0].room.find(FIND_STRUCTURES, {
                     filter: (structure) => {
                        return (structure.structureType == STRUCTURE_STORAGE ||
                                structure.structureType == STRUCTURE_ROAD ||
                                structure.structureType == STRUCTURE_CONTAINER)
                            }
                        })
        
        }
        
        for(var tower in towers){    /* for each tower */
            var closestHostile = towers[tower].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[tower].attack(closestHostile);
            }
            
            /* fixing */
            
            for(var damaged in strct){ 
	             if(strct[damaged].hits < strct[damaged].hitsMax){
	                 target = strct[damaged]
	                 towers[tower].repair(target)
	             }
            }
            
            for(var rampart in ramparts){
                if(ramparts[rampart].hits < 10000){
                    towers[tower].repair(ramparts[rampart])
                }
            }
            
            /* fixing */
            
            
        }
    }
}

module.exports = defense;
