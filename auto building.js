var autobuild ={
    SPAWNroads: function(spawn){
        if(!spawn.memory.AllIsBuild){
            var sources = spawn.pos.findClosestByPath(FIND_SOURCES)
            var controler = spawn.room.controller.pos
            let pathH = spawn.pos.findPathTo(sources, {range:1, ignoreCreeps: true})
            let pathC = spawn.pos.findPathTo(controler, {range:1, ignoreCreeps: true})
            
            for(var posit in pathH){
                spawn.room.createConstructionSite(pathH[posit].x, pathH[posit].y, STRUCTURE_ROAD)
            }
            for(var posit in pathC){
                spawn.room.createConstructionSite(pathC[posit].x, pathC[posit].y, STRUCTURE_ROAD)
            }
            spawn.memory.AllIsBuild = true
            
            
        }
        
        
    },
    
    road: function(creep, pathR){
        for(var posit in pathR){
            creep.room.createConstructionSite(pahR[posit].x, pathR[posit].y, STRUCTURE_ROAD)
        }
    }
    
}

module.exports = autobuild