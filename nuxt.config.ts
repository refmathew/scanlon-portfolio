import { dir } from "console";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // components: [ 
        // {
            // pathPrefix: false,
        // } 
    // ]
    // vite: {
    //     css: {
    //         preprocessorOptions: {
    //             scss: {
    //                 // prependData: '@use "@/assets/styles/abstracts" as abs'               
    //             }
    //         }
    //     }
    // },
    css: [
        '@/assets/styles/base/_index.scss'
    ]
    ,
    dir: {
        static: "static"
    }
})
