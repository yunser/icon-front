<template>
    <my-page title="Icon+">
        <!--图标下载 编辑 分享-->
        <div>
            <div class="collection-item" v-for="collection in collections">
                <router-link class="link" :to="'collections/' + collection.id">
                    <ul class="icon-list">
                        <li class="item" v-for="icon in icons">
                            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="534"><path d="M842.72 259.904a159.04 159.04 0 0 0-113.056-46.912h-0.16a158.592 158.592 0 0 0-112.768 46.656l-0.096 0.064-294.528 294.528a95.968 95.968 0 0 0 68.128 163.712c24.512 0 49.024-9.28 67.648-27.968l294.496-294.496a31.968 31.968 0 1 0-45.248-45.248l-294.496 294.496a31.872 31.872 0 0 1-45.088-0.16 31.552 31.552 0 0 1-0.192-45.088l294.496-294.496a95.04 95.04 0 0 1 67.648-28h0.096a95.52 95.52 0 0 1 67.872 28.16c18.112 18.112 28.096 42.24 28.128 67.84a95.136 95.136 0 0 1-27.968 67.776l-79.52 79.52-0.512 0.48-220.416 220.48a160.32 160.32 0 0 1-226.432 0.096A158.912 158.912 0 0 1 224 628.224c0-42.816 16.672-83.04 46.912-113.28l300.288-300.32a31.968 31.968 0 1 0-45.248-45.248l-300.288 300.288A222.848 222.848 0 0 0 160 628.224c0 59.872 23.264 116.16 65.504 158.4a223.168 223.168 0 0 0 158.336 65.44 223.68 223.68 0 0 0 158.592-65.6l311.456-311.424a31.68 31.68 0 0 0 7.104-11.072c18.496-26.56 28.64-57.92 28.608-91.04a159.104 159.104 0 0 0-46.88-113.024" p-id="535"></path></svg>
                        </li>
                    </ul>
                    <div>
                        <div>千牛图标库</div>
                        <div>178 icons</div>
                    </div>
                </router-link>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                collections: [],
                icons: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get('/collections')
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        this.collections = data
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>
</style>
