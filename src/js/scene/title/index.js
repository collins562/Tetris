import GameScene from '../../game/game_scene'
import SceneMain from '../main/index'
import ActionController from '../../utils/action_controller'

export default class SceneTitle extends GameScene {
    constructor (game) {
        super(game)
        this.title = document.querySelector('#title')
        this.showGap = Math.floor(game.fps * 0.75)
        this.titleShowGap = game.fps * 2
        this.count = 0
        this.titleType = 1
    }

    setup() {
        var game = this.game
        var that = this

        // 按 空格 开始游戏
        game.registerAction(32, ActionController.new({
            key: 'space',
            once: true,
            callback: (clear) => {
                that.startGame()
            },
        }))
    }

    init() {
        var game = this.game

        game.area.draw()
    }

    startGame() {
        var game =  this.game
        game.replaceScene(SceneMain, 'main')
        game.init()
        this.title.style.visibility = 'hidden'
    }

    update() {
        var t = this.title
        var game = this.game
        if (this.count % this.showGap == 0) {
            var visible = t.style.visibility == 'visible'
            t.style.visibility = visible ? 'hidden' : 'visible'
        }
        if (this.count % this.titleShowGap == 0) {
            var sb = game.scoreBoard
            var s = game.storage
            if (this.titleType) {
                sb.setTitle('Max')
                sb.setNumber(s.getMaxRecord())
            } else {
                sb.setTitle('Last Round')
                sb.setNumber(s.getLastRecord())
            }
            this.titleType = !this.titleType
        }
        this.count++
    }
}