<template>
    <div>
        {{msg.author_name}}
        <img :src="msg.book_cover"/>
        <p>{{msg.book_info}}</p>
        <p>{{msg.topic}}</p>
        <p>{{msg.topic_first}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:['msg'],
    mounted() {
        console.log(this.msg)
    },
}
</script>