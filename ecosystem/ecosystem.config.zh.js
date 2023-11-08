module.exports = {
    apps: [{
        name: 'knowledge-nuxt3',
        port: '3010',
        script: '../.output/server/index.mjs',
        watch: false,
        ignore_watch: ['node_modules', 'build', 'logs'],
        out_file: '../logs/zh/out.log', // 日志输出
        error_file: '../logs/zh/error.log', // 错误日志
        log_date_format: "YYYY-MM-DD HH:mm:ss Z",
        max_memory_restart: '1G', // 超过多大内存自动重启，仅防止内存泄露，根据自己的业务设置
        exec_mode: 'fork', // 开启多线程模式，用于负载均衡
        instances: 'max', // 启用多少个实例，可用于负载均衡
        autorestart: true // 程序崩溃后自动重启
    }]
}