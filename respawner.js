
var respawn = {
    
    
    run: function(job, nick, spwn){
        if(job == 'harvester'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], 'based_' + nick, {memory: {role: 'harvester'}}) != '-6' && '-4'){
            return('Spawning new harvester: ' + 'based_' + nick)
            
            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,WORK,MOVE], 'simple_' + nick, {memory: {role: 'harvester'}}) != '-6' && '-4'){
                return('Spawning new harvester: ' + 'simple_' + nick)
                }
            }
        }
        if(job == 'upgrader'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], 'based_' + nick, {memory: {role: 'upgrader'}}) != '-6' && '-4'){
            console.log('Spawning new upgrader: ' + 'based_'+ nick)

            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], 'simple_' + nick, {memory: {role: 'upgrader'}}) != '-6' && '-4'){
                console.log('Spawning new upgrader: ' + 'simple_' + nick)
                throw('')
                }
            }            
        }
        if(job == 'builder'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], 'based_' + nick, {memory: {role: 'builder'}}) != '-6' && '-4'){
            console.log('Spawning new builder: ' + 'based_' + nick)
            
            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], 'simple_' + nick, {memory: {role: 'builder'}}) != '-6' && '-4'){
                console.log('Spawning new builder: ' + 'simple_' + nick)
                }                 
            } 
        }
        if(job == 'picker'){
            if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], 'based_' + nick, {memory: {role: 'picker'}}) != '-6' && '-4'){
            console.log('Spawning new picker: ' + 'based_' + nick)

            }else{
                if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,MOVE], 'simple_' + nick, {memory: {role: 'picker'}}) != '-6' && '-4'){
                console.log('Spawning new picker: ' + 'simple_' + nick)
    
                }                
            }
        }
        if(job == 'fixer'){
            if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], nick, {memory: {role: 'fixer'}}) != '-6'){
            console.log('Spawning new fixer: ' + nick)

            }
        }
        if(job == 'scout'){
            if(Game.spawns[spwn].spawnCreep([CLAIM,MOVE,MOVE], nick, {memory: {role: 'scout'}}) != '-6'){
            console.log('Spawning new scout: ' + nick)

            }
        }
        
        
        
    }
}

module.exports = respawn