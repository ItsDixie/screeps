var roleHarvester = {

    /**СТАЦИОНАРНЫЙ ХАРВЕСТЕР **/
    run: function(creep) {
        var sources = creep.pos.findClosestByPath(FIND_SOURCES)


        if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources);
        }
          
    }
    
}
module.exports = roleHarvester;
