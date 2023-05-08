exports.setJsonValue = (formJson, object) => {
    let objKeys = Object.keys(object);
    // let objValue = Object.values(object);
    // objKeys.map((item, index) => {

    //     if (Array.isArray(object[item])) {
    //         let newKeys = Object.keys(object[item][0])
    //         newKeys.map((subItem) => {

    //         })
    //         objKeys.push(item);
    //     }
    //     if (object[item]) {

    //     }
    // })



    try {
        formJson.map((field, key) => {
            objKeys.map((objKey, index) => {
                // console.log(objKeys)
                if (field.type === "group") {
                    if (field.name === objKey && Array.isArray(object[objKey])) {
                        let newKeys = Object.keys(object[objKey][0])
                        newKeys.map((newKey, inx) => {
                            field.fields.map((item, idx) => {
                                if (item.name === newKey) {
                                    item.value = object[objKey][0][newKey];
                                    console.log("true ........ ", item, " === ", object[objKey][0][newKey])
                                }
                            })
                        })
                    }
                    if (field.name === objKey) {

                        // field.fields.map((item, idx) => {
                        //     if (item.name === objKey) {
                        //         item.value = object[objKey];
                        //     }
                        // })

                    }
                } else {
                    if (field.name === objKey) {
                        field.value = object[objKey];
                    }
                }
            })
        })
        return formJson;
    } catch (err) {
        console.error("Error occur while setting object value to json value ", err);
    }
}