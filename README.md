# Dixxum
Dixxum is open-source bot, that I made from scratch. I gathered some info from tutorials in game and started creating it!
# Info
Dixxum is mine attempt to create friendly-trader bot in Screeps, that will help newbies in game understood how game works and protect them from dangerous enviroment.
It doesn't absolutly mean it will be peaceful if you will get bad reputation you will be not welcome (someday I will make this dream to live)
Also I try to implicate genetic algorithm for some features, but only when ALL core features will compleated

# Road map
Bot already can auto-expand and handle your spawns, so basicly it can run without you.
Will be beta after auto-placing for construction sites. And will be finished after impelement all functions mentioned in info

Currently includes basic functions like:
* passive-defence
* active-defence
* auto creep production
* fixer,builder,harvester,picker,explorer,expansionist,attacker creeps
* auto room claim system
* Auto road construction from spawn to source and controller
---
Currently features that needs player
* Placing construction sites
* Fixing bugs XD

To-do list:
--
    (read todolist.js it more accurate)
    
    tried to insert path system to reduce CPU need, but actually it is dumb
    need a lot of work
    
    fix picker spawn finding and refactor his code to simple read
    fix wallkeeper issues and make it more complex to handle big hp walls
    fix path system making creeps don't move for some reason
    make scout finding room code more complex
    
    FIX CLAIMERS AND EXPANSIONIST TRYING TO WORK WITH ALREADY YOURS ROOMS
    
     automate building (1/3 - automated SPAWNroad building completed)
     automate invasion (1/3 - automated creep creation, WIP choose room to attack, WIP auto attack)
     automate expansion (2/3 - compleated, scouts or claimers are now will claim rooms automaticly, WIP room-message (make through room memory), WIP room-reserving)
     automate walls build and fixing - (1/3 - walls fixing)

     automate defend (2/4 - all towers now shooting enemies, WIP different target for each turret, automate ACTIVE defense, or REFACTORING )

     automate fixing (1/1 - maybe diffirent targets)

     automating creep spawn (completed with kostil, waiting for its turn to be refactored)
      create cool find resorces code and insert to all resource needed creeps (create a new file with function to find resource in room, if found giving
                                                                              route and creep go to it and withdraw/gather it) COMPLETED 2/3 NOW NEED WITH PICKERS
