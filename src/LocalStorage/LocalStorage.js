export const getDataFromLS = () => {
    const resultString = localStorage.getItem('stored');
    if (resultString) {
        return JSON.parse(resultString)
    }
    return []
}

const setDataToLS = (idArray) => {
    const dataString = JSON.stringify(idArray)
    localStorage.setItem('stored', dataString)
}

export const addToLocalStorage = (id) => {
    const datas = getDataFromLS()
    const st= datas.includes(id);
    if (!st) {
        datas.push(id)
        setDataToLS(datas)
    } else {
        return -1
    }
}

export const removeIdFromLS = (id) => {
    const datas = getDataFromLS();
    if (datas.length > 0) {
        if (datas.includes(id)) {
            const temp = datas.filter(one => one !== id)
            setDataToLS(temp)
        }
    }
}
