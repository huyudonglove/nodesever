const state={
    all:[]
}
const mutations={
    bookNum(state,n){
        state.all=n.data
    }
}
const actions={
    ansyNum({commit},n){
       commit('bookNum',n.data)
    }
}
export default{
    namespaced:true,
    state,
    actions,
    mutations
}