//所有的数据资源都放这里

//服务列表  Id = {1,2,3,4}是热门服务 引入的时候阶段数组就行
const hotService = [
    {
        serviceId:1,
        title: "service.LiveFirstAid",
        desc: "service.LiveOnlineFirstAid",
        router:"/service-support/live-first-aid",
        imgUrl:"",
        btn:"service.ApplyNow",
    },
    {
        serviceId:2,
        title: "service.remoteExperience",
        desc: "service.ExperienceTheMachineRemotely",
        router:"/service/remote-experience",
        imgUrl:"",
        btn:"service.TestTheMachineNow",
    },
    {
        serviceId:3,
        title: "service.OnlineVideoTutorials",
        desc: "service.WonderfulWorkVideos",
        imgUrl: "",
        router:"/course",
        btn:"service.GoNow",
    },
    {
        serviceId:4,
        title: "service.HelpCenter",
        desc: "service.ReviewDocumentation",
        imgUrl: "",
        router:"/help",
        btn:"service.GoNow",
    },
]

const moreService = [
    {
        serviceId:1,
        title: "foot.BIPV",
        desc: "design.FiveMajorDesignPrinciples",
        router:"/situation-design/BIPV",
        imgUrl:"",
        btn:"service.GoNow",
    },
    {
        serviceId:2,
        title: "foot.comprehensive",
        desc: "design.ComprehensiveInformationandExpandedFunctionalityofKwun",
        router:"/kwun/kwun-comprehensive",
        imgUrl:"",
        btn:"service.GoNow",
    },
    {
        serviceId:3,
        title: "foot.supportedModule",
        desc: "design.KwunSupports34TypesofPhotovoltaicPanelComponents",
        imgUrl: "",
        router:"/kwun/supported-module",
        btn:"service.GoNow",
    },
]

const serviceList = [
    {
        seriesId:5,
        title: "service.SubstituteMachineApplication",
        desc:"service.ContactAfter-salesToReplacement",
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/icon/spare-machine.svg",
        router:"/service/substitute-machine-application",
        btn:"service.ApplyNow",
    },
    {
        seriesId:6,
        title: "service.LightningFastReplacement",
        desc:"service.ContactAfter-salesReplacement",
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/icon/fast-replacement.svg",
        router:"/service-support/kwun-care",
        btn:"service.ApplyNow",
    },
    {
        seriesId:9,
        title: "service.After-salesPolicy",
        desc:"service.ReviewAfter-SalesPolicy",
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/icon/after-sales.svg",
        router:"/service/after-sales-policy",
        btn:"service.GoNow",
    },
    {
        seriesId:9,
        title: "maintenance.kwunMaintenance",
        desc:"maintenance.kwunMaintenance",
        imgUrl: "https://file.kwunphi.com/kwunphi4/images/icon/maintenance-package.svg",
        router:"/maintenance",
        btn:"service.GoNow",
    },

]

const AnnouncementsNotices = [
    {
        tag: "service.Notices.Notice",
        txt: "service.Notices.Notice-content-01",
        date: "2023-07-25",
        router: "/",
        NoticeId: 1
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-02",
        date: "2023-04-25",
        router: "/",
        NoticeId: 2
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-03",
        date: "2023-04-25",
        router: "/",
        NoticeId: 3
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-04",
        date: "2023-04-25",
        router: "/",
        NoticeId: 4
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-05",
        date: "2023-04-25",
        router: "/",
        NoticeId: 5
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-06",
        date: "2023-04-25",
        router: "/",
        NoticeId: 6
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-07",
        date: "2023-04-25",
        router: "/",
        NoticeId: 7
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-08",
        date: "2023-04-25",
        router: "/",
        NoticeId: 8
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-09",
        date: "2023-04-25",
        router: "/",
        NoticeId: 9
    },
    {
        tag: "service.Notices.Notify",
        txt: "service.Notices.Notice-content-10",
        date: "2023-04-25",
        router: "/",
        NoticeId: 10
    },
    // ... 可以继续添加更多通知
];





const serviceMap = new Map().set('substitute-machine-application',
    {
        serviceName:"service.substituteMachineApplication.serviceName",
        serviceContent:[
            {
                title:"service.substituteMachineApplication.serviceContent[0].title",
                content:[
                    {title:"service.substituteMachineApplication.serviceContent[0].content[0].title",value:"service.substituteMachineApplication.serviceContent[0].content[0].value"},
                    {title: "service.substituteMachineApplication.serviceContent[0].content[1].title",value: "service.substituteMachineApplication.serviceContent[0].content[1].value"},
                ]
            },
            {
                title: "service.substituteMachineApplication.serviceContent[1].title",
                content:[
                    {title:"service.substituteMachineApplication.serviceContent[1].content[0].title",value:"service.substituteMachineApplication.serviceContent[1].content[0].value"},
                    {title:"service.substituteMachineApplication.serviceContent[1].content[1].title",value:"service.substituteMachineApplication.serviceContent[1].content[1].value"},
                    {title:"service.substituteMachineApplication.serviceContent[1].content[2].title",value:"service.substituteMachineApplication.serviceContent[1].content[2].value"},
                    {title:"service.substituteMachineApplication.serviceContent[1].content[3].title",value:"service.substituteMachineApplication.serviceContent[1].content[3].value"},
                    {title:"service.substituteMachineApplication.serviceContent[1].content[4].title",value:"service.substituteMachineApplication.serviceContent[1].content[4].value"},
                    {title:"service.substituteMachineApplication.serviceContent[1].content[5].title",value:"service.substituteMachineApplication.serviceContent[1].content[5].value"},
                ]
            },
        ]

    }).set('lightning-fast-replacement',
    {
        serviceName:"service.lightningFastReplacement.serviceName",
        serviceContent:[
            {
                title:"service.lightningFastReplacement.serviceContent[0].title",
                content:[
                    {title:"service.lightningFastReplacement.serviceContent[0].content[0].title",value:"service.lightningFastReplacement.serviceContent[0].content[0].value"},
                    {title:"service.lightningFastReplacement.serviceContent[0].content[1].title",value:"service.lightningFastReplacement.serviceContent[0].content[1].value"},
                    {title:"service.lightningFastReplacement.serviceContent[0].content[2].title",value:"service.lightningFastReplacement.serviceContent[0].content[2].value"},
                    {title:"service.lightningFastReplacement.serviceContent[0].content[3].title",value:"service.lightningFastReplacement.serviceContent[0].content[3].value"},
                    {title:"service.lightningFastReplacement.serviceContent[0].content[4].value",value:"service.lightningFastReplacement.serviceContent[0].content[4].value"},
                ]
            },
            {
                title:"service.lightningFastReplacement.serviceContent[1].title",
                content:[]
            },
            {
                title:"service.lightningFastReplacement.serviceContent[2].title",
                content:[
                    {title:"service.lightningFastReplacement.serviceContent[2].content[0].title",value:"service.lightningFastReplacement.serviceContent[2].content[0].value"},
                ]
            },
        ]
    }).set('live-online-help',
    {
        serviceName:"service.liveOnlineHelp.serviceName",
        serviceContent:[
            {
                title:"service.liveOnlineHelp.serviceContent[0].title",
                content:[
                    {title:"service.liveOnlineHelp.serviceContent[0].content[0].title",value:"service.liveOnlineHelp.serviceContent[0].content[0].value"},
                    {title:"service.liveOnlineHelp.serviceContent[0].content[1].title",value:"service.liveOnlineHelp.serviceContent[0].content[1].value"},
                    {title:"service.liveOnlineHelp.serviceContent[0].content[2].title",value:"service.liveOnlineHelp.serviceContent[0].content[2].value"},
                ]
            },
            {
                title:"service.liveOnlineHelp.serviceContent[1].title",
                content:[
                    {title:"service.liveOnlineHelp.serviceContent[1].content[0].title",value:"service.liveOnlineHelp.serviceContent[1].content[0].value"},
                    {title:"service.liveOnlineHelp.serviceContent[1].content[1].title",value:"service.liveOnlineHelp.serviceContent[1].content[1].value"},
                    {title:"service.liveOnlineHelp.serviceContent[1].content[2].title",value:"service.liveOnlineHelp.serviceContent[1].content[2].value"},
                    {title:"service.liveOnlineHelp.serviceContent[1].content[3].title",value:"service.liveOnlineHelp.serviceContent[1].content[3].value"},
                    {title:"service.liveOnlineHelp.serviceContent[1].content[4].title",value:"service.liveOnlineHelp.serviceContent[1].content[4].value"},
                    {title:"service.liveOnlineHelp.serviceContent[1].content[5].title",value:"service.liveOnlineHelp.serviceContent[1].content[5].value"},
                ]
            },
        ]
    }).set('after-sales-policy',
    {
        serviceName:"service.afterSalesPolicy.serviceName",
        serviceContent:[
            {
                title:"service.afterSalesPolicy.serviceContent[0].title",
                content:[
                    {title:"service.afterSalesPolicy.serviceContent[0].content[0].title",value:"service.afterSalesPolicy.serviceContent[0].content[0].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[1].title",value:"service.afterSalesPolicy.serviceContent[0].content[1].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[2].title",value:"service.afterSalesPolicy.serviceContent[0].content[2].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[3].title",value:"service.afterSalesPolicy.serviceContent[0].content[3].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[4].title",value:"service.afterSalesPolicy.serviceContent[0].content[4].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[5].title",value:"service.afterSalesPolicy.serviceContent[0].content[5].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[6].title",value:"service.afterSalesPolicy.serviceContent[0].content[6].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[7].title",value:"service.afterSalesPolicy.serviceContent[0].content[7].value"},
                    {title:"service.afterSalesPolicy.serviceContent[0].content[8].title",value:"service.afterSalesPolicy.serviceContent[0].content[8].value"},
                ]
            },
            {
                title:"service.afterSalesPolicy.serviceContent[1].title",
                content:[
                    {title:"service.afterSalesPolicy.serviceContent[1].content[0].title",value:"service.afterSalesPolicy.serviceContent[1].content[0].value"},
                    {title:"service.afterSalesPolicy.serviceContent[1].content[1].title",value:"service.afterSalesPolicy.serviceContent[1].content[1].value"},
                    {title:"service.afterSalesPolicy.serviceContent[1].content[2].title",value:"service.afterSalesPolicy.serviceContent[1].content[2].value"},
                    {title:"service.afterSalesPolicy.serviceContent[1].content[3].title",value:"service.afterSalesPolicy.serviceContent[1].content[3].value"},
                    {title:"service.afterSalesPolicy.serviceContent[1].content[4].title",value:"service.afterSalesPolicy.serviceContent[1].content[4].value"},
                    {title:"service.afterSalesPolicy.serviceContent[1].content[5].title",value:"service.afterSalesPolicy.serviceContent[1].content[5].value"},
                    {title:"service.afterSalesPolicy.serviceContent[1].content[6].title",value:"service.afterSalesPolicy.serviceContent[1].content[6].value"},
                ]
            },
            {
                title:"service.afterSalesPolicy.serviceContent[2].title",
                content:[
                    {title:"service.afterSalesPolicy.serviceContent[2].content[0].title",value:"service.afterSalesPolicy.serviceContent[2].content[0].value"},
                    {title:"service.afterSalesPolicy.serviceContent[2].content[1].title",value:"service.afterSalesPolicy.serviceContent[2].content[1].value"},
                    {title:"service.afterSalesPolicy.serviceContent[2].content[2].title",value:"service.afterSalesPolicy.serviceContent[2].content[2].value"},
                    {title:"service.afterSalesPolicy.serviceContent[2].content[3].title",value:"service.afterSalesPolicy.serviceContent[2].content[3].value"},
                    {title:"service.afterSalesPolicy.serviceContent[2].content[4].title",value:"service.afterSalesPolicy.serviceContent[2].content[4].value"},
                    {title:"service.afterSalesPolicy.serviceContent[2].content[5].title",value:"service.afterSalesPolicy.serviceContent[2].content[5].value"},
                    {title:"service.afterSalesPolicy.serviceContent[2].content[6].title",value:"service.afterSalesPolicy.serviceContent[2].content[6].value"},
                    {title:"service.afterSalesPolicy.serviceContent[2].content[7].title",value:"service.afterSalesPolicy.serviceContent[2].content[7].value"},
                ]
            },
        ]
    }).set('remote-experience',
    {
    serviceName:"service.remote-experience.serviceName",
    serviceContent:[
        {
            title:"service.remote-experience.serviceContent[0].title",
            content:[
                {title:"",value:"",imgUrl:"https://file.kwunphi.com/kwunphi/images/remote/zh/download_app.png", router:"/app",},
            ]
        },
        {
            title:"service.remote-experience.serviceContent[1].title",
            content:[
                {title:"",value:"",imgUrl:"https://file.kwunphi.com/kwunphi/images/remote/zh/wechat_rolin.png"},
            ]
        },
        {
            title:"service.remote-experience.serviceContent[2].title",
            content:[
                {title:"",value:"",imgUrl:"https://file.kwunphi.com/kwunphi/images/remote/zh/login_app.png"},
            ]
        },
        {
            title:"service.remote-experience.serviceContent[3].title",
            content:[
                {title:"",value:"",imgUrl:"https://file.kwunphi.com/kwunphi/images/remote/zh/watch.jpg"},
            ]
        },
    ]
})


export default {
    serviceList,hotService,AnnouncementsNotices,serviceMap,moreService
}
