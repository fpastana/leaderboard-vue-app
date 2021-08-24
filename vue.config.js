module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost/canadadrives/api',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' }
            }
        }
    }
}