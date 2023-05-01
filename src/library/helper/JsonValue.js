exports.setJsonValue = (fromJson, object) => {
    let objKeys = Object.keys(object);
    try {
        console.log(fromJson)
        fromJson.map((field, key) => {
            objKeys.map((objKey, index) => {
                if (field.type === "group") {
                    field.fields.map((item, idx) => {
                        if (item.name === objKey) {
                            item.value = object[objKey];
                        }
                    })
                } else {
                    if (field.name === objKey) {
                        field.value = object[objKey];
                    }
                }
            })
        })
        return fromJson;
    } catch (err) {
        console.error("Error occur while setting object value to json value ", err);
    }
}