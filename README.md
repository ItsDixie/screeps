# kirAIshki
*Open-source screeps AI, heavy WIP, tho.*

main branch protected, to commit create another one ```git branch <name>``` -> ```git checkout <name>```, after work create **PR**

welcome to DEV branch, there's most newest fixes and patches, but more unstable. Also possible to auto-aprove PR

**Any PR welcome**

# Info
kirAIshki is mine attempt to create friendly-trader bot in Screeps, that will help newbies in game understood how game works and protect them from dangerous enviroment.
It doesn't absolutly mean it will be peaceful if you will get bad reputation you will be not welcome (someday I will make this dream to live)

Currently very raw and includes basic functions like:
* passive-defence
* active-defence
* auto creep production
* fixer,builder,harvester,picker,explorer,attacker creeps
* raw room claim function (through scout creep)
* Auto road construction from spawn to source and controller


To-do list:
--
    WIP AND RUSTY ENGLISH ATTENTION!
    
    tried to insert path system to reduce CPU need, now working only on builder.
    need a lot of work
    automate building (1/3 - automated SPAWNroad building completed)
    automate expansion (1/3 - compleated, scouts or claimers are now will claim rooms automaticly, WIP room-message, WIP room-reserving)
 
     automate defend (1/3 - all towers now shooting enemies, WIP different target for each turret, WIP automat ACTIVE defense or REFACTORING )

     automate fixing (1/1 - maybe diffirent targets)

     automating creep spawn (waiting for its turn to be refactored)
      create cool find resorces code and insert to all resource needed creeps (create a new file with function to find resource in room, if found giving
                                                                              route and creep go to it and withdraw/gather it) COMPLETED 2/3 NOW NEED WITH PICKERS
     long-wait ideas:
     min-cut graph for walls
     reputation system
