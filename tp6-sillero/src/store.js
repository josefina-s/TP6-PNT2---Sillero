import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message : '',
        restartBtn : 'new colors',
        win : false,
        squares : '',
        pickedColor : '',

    },
    actions : {
        guardarMessage({commit}, msg){
            commit('guardarMessage', msg)
        },
        msgRestartBtn({commit}, msg){
            commit('msgRestartBtn', msg)
        },
        guardarPickedColor({commit}, color){
            commit('guardarPickedColor', color)
        }, 
        guardarSquares({commit}, squares){
            commit('guardarSquares', squares)
        },
        setWin({commit}, condicion){
            commit('setWin', condicion)
        }

    },
    mutations : {
        guardarMessage(state, msg){
            state.message = msg
        },
        msgRestartBtn(state, msg){
            state.restartBtn = msg
        },
        guardarPickedColor(state, color){
            state.pickedColor = color
        },
        guardarSquares(state, squares){
            state.squares = squares
        },
        setWin(state, condicion){
            state.win = condicion
        }
    }
})