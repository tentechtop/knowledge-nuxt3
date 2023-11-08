// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    imports: {
        autoImport: true
    },
    css: ["@/assets/main.css",
        "@/assets/iconfont/iconfont.css"
    ],
    app: {
        head: {
            title: '紫光毕设-官方网站',
            htmlAttrs: {},
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'keywords', name: 'keywords', content: ''},
                {hid: 'description', name: 'description', content: ''},
                {name: 'format-detection', content: 'telephone=no'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                /*        { rel: "stylesheet", type: "text/css", href: 'https://file.kwunphi.com/kwunphi/css/' + htmlGrayCss },*/
                // { rel: "stylesheet", type: "text/css", href: '@/assets/iconfont/iconfont.css' }
            ],
            script: []
        },
        // automatic transition，转场动画
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    build: {},
    nitro: {
        output: {
            dir: '../.output',
            serverDir: '../.output/server',
            publicDir: '../.output/public'
        }
    },
    plugins: [],
    modules: [],
})
