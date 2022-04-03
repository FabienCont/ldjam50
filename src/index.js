import gameEngine from "game-engine"
import GameLoader from "core-web-engine/loaders/GameLoader"
import GameState from "core-web-engine/models/GameState"

const container= document.querySelector('.game-container')


const gameState= new GameState({});

const gameLoader= new GameLoader({root:"db_files"})

const loadLevel=function(){
    gameLoader.load(gameState).then((game)=>{
        console.log(game)
        const engine = new gameEngine({container,level:game.level,gameState:game.state,loadLevel})
        window._game_engine=engine;
    
    }).catch((err)=>{
    
        window.alert('Error during game download')
        throw err
    
    })
    
}

loadLevel()
