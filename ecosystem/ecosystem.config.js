module.exports = {
    apps: [{
        name: 'knowledge-nuxt3',
        script: '../.output/server/index.mjs',
        out_file: '../logs/zh/out.log', // 日志输出
        error_file: '../logs/zh/error.log', // 错误日志
        log_date_format: "YYYY-MM-DD HH:mm:ss Z",
        max_memory_restart: '1G', // 超过多大内存自动重启，仅防止内存泄露，根据自己的业务设置
        autorestart: true // 程序崩溃后自动重启
    }]
}