import gameEngine from "game-engine"
import GameLoader from "core-web-engine/loaders/GameLoader"
import GameState from "core-web-engine/models/GameState"
import musicDeJeu from "./musicDeJeu.mp3"

const container= document.querySelector('.game-container')


const gameState= new GameState({});

const gameLoader= new GameLoader({root:"db_files"})

const loadLevel=function(){
    let elem= document.querySelector(".splashScreen")
    elem.style.display=null;
    gameState.soundCommands.push({src:musicDeJeu,loop:true})
    gameLoader.load(gameState).then((game)=>{
        setTimeout(() => {
            let elem= document.querySelector(".splashScreen")
            elem.style.display="none";
            const engine = new gameEngine({container,level:game.level,gameState:game.state,loadLevel})
            window._game_engine=engine;
        }, 2000);
      
    
    }).catch((err)=>{
    
        window.alert('Error during game download')
        throw err
    
    })
    
}

loadLevel()
