// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    ssr: true,
    imports: {
        autoImport: true
    },
    css: [
        "@/assets/main.css",
        "@/assets/iconfont/iconfont.css",
        '@unocss/reset/tailwind.css',
        '@/styles/index.scss',
        '@/styles/anime.css',
    ],
    // @ts-ignore
    colorMode: {
        classSuffix: '',
    },
    experimental: {
        reactivityTransform: true,
        inlineSSRStyles: false,
    },
    app: {
        head: {
            title: '奥恩毕设 aecode-官方网站',
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
            dir: '.output',
            serverDir: '.output/server',
            publicDir: '.output/public'
        }
    },
    plugins: [],
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@element-plus/nuxt',
    ],
    devServer: {
        port: 3000,
    },


})
