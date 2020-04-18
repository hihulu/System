module.exports = {
    publicPath: '/',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
       // proxy: {//如需跨域请求多个域名，在此对象进行扩展即可
        //    '/apis': {
        //        target: '',
        //        ws: true,
        //        changeOrigin: true,
        //        pathRewrite: {
        //            '^/apis': ''
        //        }
        //    }
        //}
        // proxy: {
        //     '/api':{
        //         target: 'https://xyt-wx.cumt.edu.cn:80/',
        //         ws: true,
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //     }
        // }
    }
}