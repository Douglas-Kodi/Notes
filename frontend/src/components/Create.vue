<template>
    <div class="container mt-4">
        <form @submit.prevent="insertArticle">
            <input
            type="text"
            class="form-control"
            placeholder="Please enter your title"
            v-model="title"
            />
            <br/>

            <textarea rows="10"
            class="form-control"
            placeholder="Please enter your body"
            v-model="body"
            >
            </textarea>

            <button
            class="btn btn-success mt-4"
            >
                Publish Article
            </button>
        </form>
        <div v-if="error"
        class="alert alert-warning alert-dismissible fade show mt-5"
        role="alert"
        >
            <strong>{{error}}</strong>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:null,
            body:null,
            error:null
        }
    },
    methods: {
        insertArticle() {
            if(!this.title || !this.body){
                this.error = "Please add all field"
            } else {
                fetch('http://localhost:5000/add', {
                    method:"POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({title:this.title, body:this.body})
                })
                .then(resp => resp.json())
                .then(() => {
                    this.$router.push({
                        name:'home'
                    })
                })
                .catch(error => {
                    console.log(error )
                })
            }
        }
    }
}
</script>

<style>

</style>