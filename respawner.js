
var respawn = {
    
    
    run: function(job, nick, spwn){
        if(job == 'harvester'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], 'BASED-' + nick, {memory: {role: 'harvester'}}) != '-6' && '-4'){

            
            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,WORK,MOVE], 'SIMPLE-' + nick, {memory: {role: 'harvester'}}) != '-6' && '-4'){

                }
            }
        }
        if(job == 'upgrader'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], 'BASED-' + nick, {memory: {role: 'upgrader'}}) != '-6' && '-4'){


            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], 'SIMPLE-' + nick, {memory: {role: 'upgrader'}}) != '-6' && '-4'){

                }
            }            
        }
        if(job == 'builder'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], 'BASED-' + nick, {memory: {role: 'builder'}}) != '-6' && '-4'){
            
            }else{
                if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], 'SIMPLE-' + nick, {memory: {role: 'builder'}}) != '-6' && '-4'){
                    
                }                 
            } 
        }
        if(job == 'picker'){
            if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], 'BASED-' + nick, {memory: {role: 'picker'}}) != '-6' && '-4'){


            }else{
                if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,MOVE], 'SIMPLE-' + nick, {memory: {role: 'picker'}}) != '-6' && '-4'){

    
                }                
            }
        }
        if(job == 'distribuitor'){
            if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], 'BASED-' + nick, {memory: {role: 'distribuitor'}}) != '-6' && '-4'){


            }else{
                if(Game.spawns[spwn].spawnCreep([CARRY,CARRY,MOVE], 'SIMPLE-' + nick, {memory: {role: 'distribuitor'}}) != '-6' && '-4'){

    
                }                
            }
        }
        if(job == 'fixer'){
            if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], nick, {memory: {role: 'fixer'}}) != '-6'){


            }
        }
        if(job == 'wallkeeper'){
            if(Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE], nick, {memory: {role: 'wallkeeper'}}) != '-6'){


            }
        }
        if(job == 'scout'){
            if(Game.spawns[spwn].spawnCreep([CLAIM,MOVE,MOVE], nick, {memory: {role: 'scout'}}) != '-6' && Game.spawns[spwn].spawnCreep([CLAIM,MOVE,MOVE], nick, {memory: {role: 'scout'}}) != '-4'){
            console.log('Spawning new scout: ' + nick)

            }
        }
        if(job == 'expansionist'){
            if(Game.spawns[spwn].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], 'BASED-'+ nick, {memory: {role: 'expansionist'}}) != '-6'){

            }else{
                Game.spawns[spwn].spawnCreep([WORK,CARRY,MOVE,MOVE], 'SIMPLE-'+ nick, {memory: {role: 'expansionist'}})
            }
        }
        if(job == 'attacker'){
            if(Game.spawns[spwn].spawnCreep([TOUGH, TOUGH, TOUGH, MOVE, RANGED_ATTACK, ATTACK, ATTACK, MOVE], 'BASED-' + nick, {memory: {role: 'attacker'}}) != '-6' && '-4'){

            
            }else{
                if(Game.spawns[spwn].spawnCreep([TOUGH,TOUGH,MOVE,ATTACK,ATTACK], 'SIMPLE-' + nick, {memory: {role: 'attacker'}}) != '-6' && '-4'){

                }
            }
        }
        
        
        
    }
}

module.exports = respawn