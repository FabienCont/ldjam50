import gameEngine from "game-engine"
import GameLoader from "core-web-engine/loaders/GameLoader"
import GameState from "core-web-engine/models/GameState"

const container= document.querySelector('.game-container')

const gameLoader= new GameLoader({root:"db_files"})

const gameState= new GameState({});

gameLoader.load(gameState).then((game)=>{

    const engine = new gameEngine({container,level:game.level,gameState:game.state})
    window._game_engine=engine;

}).catch((err)=>{

    window.alert('Error during game download')
    throw err

})