
var respawn = {
    
    
    run: function(job, nick, spwn){
        if(job == 'harvester'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], 'BASED-' + nick, {memory: {role: 'harvester'}}) != '-6' && '-4'){
            return('Spawning new harvester: ' + 'BASED-' + nick)
            
            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,WORK,MOVE], 'SIMPLE-' + nick, {memory: {role: 'harvester'}}) != '-6' && '-4'){
                return('Spawning new harvester: ' + 'SIMPLE-' + nick)
                }
            }
        }
        if(job == 'upgrader'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], 'BASED-' + nick, {memory: {role: 'upgrader'}}) != '-6' && '-4'){
            console.log('Spawning new upgrader: ' + 'BASED-'+ nick)

            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], 'SIMPLE-' + nick, {memory: {role: 'upgrader'}}) != '-6' && '-4'){
                console.log('Spawning new upgrader: ' + 'SIMPLE-' + nick)
                throw('')
                }
            }            
        }
        if(job == 'builder'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], 'BASED-' + nick, {memory: {role: 'builder'}}) != '-6' && '-4'){
            console.log('Spawning new builder: ' + 'BASED-' + nick)
            
            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], 'SIMPLE-' + nick, {memory: {role: 'builder'}}) != '-6' && '-4'){
                console.log('Spawning new builder: ' + 'SIMPLE-' + nick)
                }                 
            } 
        }
        if(job == 'picker'){
            if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], 'BASED-' + nick, {memory: {role: 'picker'}}) != '-6' && '-4'){
            console.log('Spawning new picker: ' + 'BASED-' + nick)

            }else{
                if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,MOVE], 'SIMPLE-' + nick, {memory: {role: 'picker'}}) != '-6' && '-4'){
                console.log('Spawning new picker: ' + 'SIMPLE-' + nick)
    
                }                
            }
        }
        if(job == 'fixer'){
            if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], nick, {memory: {role: 'fixer'}}) != '-6'){
            console.log('Spawning new fixer: ' + nick)

            }
        }
        if(job == 'wallkeeper'){
            if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], nick, {memory: {role: 'wallkeeper'}}) != '-6'){
            console.log('Spawning new wallkeeper: ' + nick)

            }
        }
        if(job == 'scout'){
            if(Game.spawns[spwn].spawnCreep([CLAIM,MOVE,MOVE], nick, {memory: {role: 'scout'}}) != '-6'){
            console.log('Spawning new scout: ' + nick)

            }
        }
        if(job == 'attacker'){
            if(Game.spawns[spwn].spawnCreep([TOUGH, TOUGH, TOUGH, MOVE, RANGED_ATTACK, ATTACK, ATTACK, MOVE], 'BASED-' + nick, {memory: {role: 'attacker'}}) != '-6' && '-4'){
            return('Spawning new attacker: ' + 'BASED-' + nick)
            
            }else{
                if(Game.spawns[spwn].spawnCreep([TOUGH,TOUGH,MOVE,ATTACK,ATTACK], 'SIMPLE-' + nick, {memory: {role: 'attacker'}}) != '-6' && '-4'){
                return('Spawning new attacker: ' + 'SIMPLE-' + nick)
                }
            }
        }
        
        
        
    }
}

module.exports = respawn