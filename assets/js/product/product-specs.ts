const productSpecs =[
    {
        productName:"Kwun-B63G",
        model:"Kwun-B63G",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B63G",
        price:246666,
        priceUS:47250,
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/63/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B33H-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B63G",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B63G.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B63G.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B63G.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B63G.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B63G.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B63G.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B63G.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B63G.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B63G.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B63G.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B63G.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B63G.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B63G.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B63G.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B63G.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B63G.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B63G.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B63G.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.shape.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B63G.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B63G.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B63G.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerWaterCombination", value: "productSpecs.Kwun-B63G.shape.rollerWaterCombination" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B63G.shape.rollerLength" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B63G.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B63G.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B63G.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B63G.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B63G.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B63G.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B63G.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B63G.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B63G.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B63G.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B63G.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B63G.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B63G.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B63G.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B63G.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B63G.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B63G.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B63G.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B63G.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B63G.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B63G.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B63G.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B62G",
        model:"Kwun-B62G",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B62G",
        price:246666,
        priceUS:47250,
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/63/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B33H-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B62G",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B62G.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B62G.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B62G.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B62G.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B62G.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B62G.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B62G.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B62G.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B62G.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B62G.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B62G.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B62G.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B62G.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B62G.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B62G.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B62G.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B62G.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B62G.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.shape.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B62G.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B62G.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B62G.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerWaterCombination", value: "productSpecs.Kwun-B62G.shape.rollerWaterCombination" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B62G.shape.rollerLength" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B62G.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B62G.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B62G.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B62G.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B62G.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B62G.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B62G.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B62G.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B62G.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B62G.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B62G.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B62G.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B62G.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B62G.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B62G.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B62G.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B62G.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B62G.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B62G.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B62G.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B62G.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B62G.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B33H",
        model:"Kwun-B33H",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B33H",
        price:246666,
        priceUS:47250,
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B33H-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B33H",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B33H.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B33H.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B33H.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B33H.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B33H.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B33H.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B33H.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B33H.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B33H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B33H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B33H.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B33H.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B33H.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B33H.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B33H.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B33H.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B33H.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B33H.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.shape.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B33H.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B33H.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B33H.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerWaterCombination", value: "productSpecs.Kwun-B33H.shape.rollerWaterCombination" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B33H.shape.rollerLength" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B33H.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B33H.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B33H.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B33H.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B33H.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B33H.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B33H.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B33H.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B33H.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B33H.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B33H.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B33H.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B33H.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B33H.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B33H.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B33H.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B33H.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B33H.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B33H.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B33H.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B33H.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B33H.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B33H",
        model:"Kwun-B33H",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B33H",
        price:246666,
        priceUS:47250,
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B33H-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B33H",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B33H.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B33H.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B33H.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B33H.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B33H.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B33H.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B33H.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B33H.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B33H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B33H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B33H.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B33H.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B33H.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B33H.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B33H.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B33H.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B33H.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B33H.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.shape.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B33H.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B33H.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B33H.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerWaterCombination", value: "productSpecs.Kwun-B33H.shape.rollerWaterCombination" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B33H.shape.rollerLength" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B33H.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B33H.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B33H.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B33H.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B33H.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B33H.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B33H.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B33H.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B33H.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B33H.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B33H.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B33H.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B33H.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B33H.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B33H.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B33H.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B33H.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B33H.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B33H.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B33H.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B33H.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B33H.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B32H",
        model:"Kwun-B32H",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B32H",
        price: 188666,
        priceUS:38750,
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B32H-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B32H",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B32H.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B32H.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B32H.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B32H.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B32H.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B32H.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B32H.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B32H.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B32H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B32H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B32H.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B32H.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B32H.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B32H.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B32H.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B32H.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B32H.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B32H.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.shape.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B32H.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B32H.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B32H.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerWaterCombination", value: "productSpecs.Kwun-B32H.shape.rollerWaterCombination" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B32H.shape.rollerLength" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B32H.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B32H.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B32H.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B32H.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B32H.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B32H.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B32H.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B32H.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B32H.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B32H.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B32H.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B32H.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B32H.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B32H.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B32H.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B32H.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B32H.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B32H.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B32H.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B32H.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B32H.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B32H.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B32L",
        model:"Kwun-B32L",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B32L",
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        price: 156666,
        priceUS:30000,
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/33/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B32L-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B32L",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B32L.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B32L.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B32L.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B32L.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B32L.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B32L.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B32L.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B32L.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B32L.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B32L.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B32L.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B32L.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B32L.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B32L.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B32L.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B32L.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B32L.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B32L.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.shape.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B32L.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B32L.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B32L.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerWaterCombination", value: "productSpecs.Kwun-B32L.shape.rollerWaterCombination" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B32L.shape.rollerLength" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B32L.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B32L.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B32L.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B32L.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B32L.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B32L.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B32L.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B32L.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B32L.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B32L.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B32L.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B32L.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B32L.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B32L.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B32L.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B32L.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B32L.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B32L.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B32L.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B32L.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B32L.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B32L.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B22H",
        model:"Kwun-B22H",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B22H",
        price: 132666,
        priceUS:28750,
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B22H-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B22H",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B22H.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B22H.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B22H.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B22H.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B22H.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B22H.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B22H.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B22H.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters: [
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B22H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B22H.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B22H.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B22H.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B22H.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B22H.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B22H.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B22H.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B22H.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B22H.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B22H.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B22H.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B22H.shape.rollerBrushLength" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B22H.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerBrushesNumber", value: "productSpecs.Kwun-B22H.shape.rollerBrushesNumber" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B22H.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B22H.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B22H.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B22H.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B22H.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B22H.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B22H.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B22H.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B22H.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B22H.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B22H.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B22H.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B22H.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B22H.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B22H.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B22H.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B22H.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B22H.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B22H.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B22H.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B22H.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B22H.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B22L",
        model:"Kwun-B22L",
        productId:1,
        accessoryRouter:"/accessories",//
        purchaseRouter:"purchase/Kwun-B22L",
        price: 116666,
        priceUS:21250,
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/22/bg-white/01.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B22L-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B22L",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B22L.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B22L.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B22L.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B22L.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B22L.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B22L.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B22L.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B22L.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B22L.lifeAndEndurance.designLife" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B22L.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B22L.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B22L.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B22L.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B22L.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B22L.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B22L.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B22L.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B22L.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B22L.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B22L.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B22L.shape.rollerBrushLength" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B22L.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerBrushesNumber", value: "productSpecs.Kwun-B22L.shape.rollerBrushesNumber" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B22L.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B22L.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B22L.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B22L.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B22L.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B22L.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B22L.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B22L.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B22L.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B22L.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B22L.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B22L.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B22L.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B22L.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B22L.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B22L.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B22L.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B22L.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B22L.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B22L.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B22L.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B22L.security.seamlessSafety" },
                ]
            },
        ],
    },
    {
        productName:"Kwun-B11L",
        model:"Kwun-B11L",
        productId:1,
        accessoryRouter:"/accessories",//
        price: 106666,
        priceUS:19500,
        purchaseRouter:"purchase/Kwun-B11L",
        slotId:0,//槽位id index 只有在对应的槽位才能取消
        isSelect:false,//被选择的会被
        enableSelect:true,//为true为可选择
        productImgUrl:"https://file.kwunphi.com/kwunphi4/images/kwun/11/bg-white/1.png",
        downloadProductSpecsUrl:"https://file.kwunphi.com/kwunphi/files/specification/Kwun-B11L-%E4%BF%A1%E6%81%AF%E5%8D%95%E9%A1%B5.pdf?r=aae7a2b43d350509cfd483b48037c7ba",
        videoRouter:"/video/Kwun-B11L",
        specs:[
            {title:"productSpecs.RecommendedWorkingConditions",
                parameters:[
                    { name: "productSpecs.standardParameters.specs.PVPanelAngle", value: "productSpecs.Kwun-B11L.standardParameters.PVPanelAngle" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSurfaceTemperature", value: "productSpecs.Kwun-B11L.standardParameters.PVModuleSurfaceTemperature" },
                    { name: "productSpecs.standardParameters.specs.EnvironmentalTemperature", value: "productSpecs.Kwun-B11L.standardParameters.EnvironmentalTemperature" },
                    { name: "productSpecs.standardParameters.specs.PVModuleSpacing", value: "productSpecs.Kwun-B11L.standardParameters.PVModuleSpacing" },
                    { name: "productSpecs.standardParameters.specs.PVModuleHeightDifference", value: "productSpecs.Kwun-B11L.standardParameters.PVModuleHeightDifference" },
                    { name: "productSpecs.standardParameters.specs.Rainfall", value: "productSpecs.Kwun-B11L.standardParameters.Rainfall" },
                    { name: "productSpecs.standardParameters.specs.WindForce", value: "productSpecs.Kwun-B11L.standardParameters.WindForce" },
                    { name: "productSpecs.standardParameters.specs.DustWaterProtectionLevel", value: "productSpecs.Kwun-B11L.standardParameters.DustWaterProtectionLevel" },
                ]
            },
            {title:"productSpecs.technology.title",
                parameters:[
                    { name: "productSpecs.technology.specs.operatingSystem" },
                    { name: "productSpecs.technology.specs.visionNavigation" },
                    { name: "productSpecs.technology.specs.pathPlanning" },
                    { name: "productSpecs.technology.specs.aiPlatform" },
                    { name: "productSpecs.technology.specs.otaPlatform" },
                ]
            },
            {title:"productSpecs.lifeAndEndurance.title",
                parameters:[
                    { name: "productSpecs.lifeAndEndurance.specs.designLife", value: "productSpecs.Kwun-B11L.lifeAndEndurance.designLife" },
                    { name: "productSpecs.lifeAndEndurance.specs.warrantyPeriod", value: "productSpecs.Kwun-B11L.lifeAndEndurance.warrantyPeriod" },
                    { name: "productSpecs.lifeAndEndurance.specs.batteryCapacity", value: "productSpecs.Kwun-B11L.lifeAndEndurance.batteryCapacity" },
                    { name: "productSpecs.lifeAndEndurance.specs.enduranceTime", value: "productSpecs.Kwun-B11L.lifeAndEndurance.enduranceTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.chargingTime", value: "productSpecs.Kwun-B11L.lifeAndEndurance.chargingTime" },
                    { name: "productSpecs.lifeAndEndurance.specs.8HourEnduranceMethod", value: "productSpecs.Kwun-B11L.lifeAndEndurance.8HourEnduranceMethod" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters:[
                    { name: "productSpecs.abilityToClean.specs.buoyancy", value: "productSpecs.Kwun-B11L.abilityToClean.buoyancy" },
                    { name: "productSpecs.abilityToClean.specs.dustAccumulation", value: "productSpecs.Kwun-B11L.abilityToClean.dustAccumulation" },
                    { name: "productSpecs.abilityToClean.specs.dryBirdDroppings", value: "productSpecs.Kwun-B11L.abilityToClean.dryBirdDroppings" },
                    { name: "productSpecs.abilityToClean.specs.cleaningEfficiency", value: "productSpecs.Kwun-B11L.abilityToClean.cleaningEfficiency" },
                ]
            },
            {title:"productSpecs.abilityToClean.title",
                parameters: [
                    { name: "productSpecs.shape.specs.bodySizeWithoutRoller", value: "productSpecs.Kwun-B11L.shape.bodySizeWithoutRoller" },
                    { name: "productSpecs.shape.specs.bodyWeightWithoutRoller", value: "productSpecs.Kwun-B11L.shape.bodyWeightWithoutRoller" },
                    { name: "productSpecs.shape.specs.rollerLength", value: "productSpecs.Kwun-B11L.shape.rollerBrushLength" },
                    { name: "productSpecs.shape.specs.rollerWeightDetachable", value: "productSpecs.Kwun-B11L.shape.rollerWeightDetachable" },
                    { name: "productSpecs.shape.specs.rollerBrushesNumber", value: "productSpecs.Kwun-B11L.shape.rollerBrushesNumber" },
                ]
            },
            {title:"productSpecs.manipulation.title",
                parameters:[
                    { name: "productSpecs.manipulation.specs.maxControllablePerPerson", value: "productSpecs.Kwun-B11L.manipulation.maxControllablePerPerson" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnSlopes", value: "productSpecs.Kwun-B11L.manipulation.suggestedMaxControllableOnSlopes" },
                    { name: "productSpecs.manipulation.specs.suggestedMaxControllableOnRoofs", value: "productSpecs.Kwun-B11L.manipulation.suggestedMaxControllableOnRoofs" },
                    { name: "productSpecs.manipulation.specs.softwareMaintenanceUpgrade", value: "productSpecs.Kwun-B11L.manipulation.softwareMaintenanceUpgrade" },
                    { name: "productSpecs.manipulation.specs.nightOperation", value: "productSpecs.Kwun-B11L.manipulation.nightOperation" },
                    { name: "productSpecs.manipulation.specs.realTimeLogView", value: "productSpecs.Kwun-B11L.manipulation.realTimeLogView" },
                    { name: "productSpecs.manipulation.specs.droneDeployment", value: "productSpecs.Kwun-B11L.manipulation.droneDeployment" },
                    { name: "productSpecs.manipulation.specs.unmannedOperationOnRamps", value: "productSpecs.Kwun-B11L.manipulation.unmannedOperationOnRamps" },
                    { name: "productSpecs.manipulation.specs.remoteControl", value: "productSpecs.Kwun-B11L.manipulation.remoteControl" },
                    { name: "productSpecs.manipulation.specs.additionalRFRemoteController", value: "productSpecs.Kwun-B11L.manipulation.additionalRFRemoteController" },
                    { name: "productSpecs.manipulation.specs.resumeAfterPowerLoss", value: "productSpecs.Kwun-B11L.manipulation.resumeAfterPowerLoss" },
                    { name: "productSpecs.manipulation.specs.adjustBrushSpeed", value: "productSpecs.Kwun-B11L.manipulation.adjustBrushSpeed" },
                    { name: "productSpecs.manipulation.specs.ratedBrushSpeed", value: "productSpecs.Kwun-B11L.manipulation.ratedBrushSpeed" },
                ]
            },
            {title:"productSpecs.security.title",
                parameters:[
                    { name: "productSpecs.security.specs.operationModes", value: "productSpecs.Kwun-B11L.security.operationModes" },
                    { name: "productSpecs.security.specs.positioningMethod", value: "productSpecs.Kwun-B11L.security.positioningMethod" },
                    { name: "productSpecs.security.specs.positioningAccuracy", value: "productSpecs.Kwun-B11L.security.positioningAccuracy" },
                    { name: "productSpecs.security.specs.steeringDirection", value: "productSpecs.Kwun-B11L.security.steeringDirection" },
                    { name: "productSpecs.security.specs.fallProtection", value: "productSpecs.Kwun-B11L.security.fallProtection" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B11L.security.antiSlip" },
                    { name: "productSpecs.security.specs.antiTheftLocationTerminal", value: "productSpecs.Kwun-B11L.security.antiTheftLocationTerminal" },
                    { name: "productSpecs.security.specs.protectionLevel", value: "productSpecs.Kwun-B11L.security.protectionLevel" },
                    { name: "productSpecs.security.specs.seamlessSafety", value: "productSpecs.Kwun-B11L.security.seamlessSafety" },
                ]
            },
        ],
    },
]
const productSpecsMap = new Map()
productSpecs.forEach((product)=>{
    productSpecsMap.set(product.model,product)
})
export default {
    productSpecs,productSpecsMap
}
