exports.setJsonValue = (formJson, object) => {
    let objKeys = Object.keys(object);
    try {
        formJson.map((field, key) => {
            objKeys.map((objKey, index) => {
                if (field.type === "group") {

                    if (field.name === objKey && Array.isArray(object[objKey])) {
                        let newKeys = Object.keys(object[objKey][0])
                        newKeys.map((newKey, inx) => {
                            field.fields.map((item, idx) => {
                                if (item.name === newKey) {
                                    item.value = object[objKey][0][newKey];
                                }
                            })
                        })
                    }
                    else if (field.name === objKey) {
                        let newKeys = Object.keys(object[objKey])
                        // getRecursiveValue(newKeys,field,object, objKey);
                        newKeys.map((newKey, inx) => {
                            field.fields.map((item, idx) => {
                                if (item.name === newKey) {
                                    item.value = object[objKey][newKey];
                                }
                            })
                        })
                    } else {
                        if (field.type === "group") {
                            field.fields.map((item, idx) => {
                                if (item.name === objKey) {
                                    item.value = object[objKey];
                                }
                            })
                        }
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

const getRecursiveValue = (newKeys, field, object, objKey) => {


    newKeys.map((newKey, inx) => {
        field.fields.map((item, idx) => {
            if (item.name === newKey) {
                item.value = object[objKey][newKey];
            }
        })
    })

}