const initialState = []
export const state = (state = initialState, action) => {
    switch (action.type) {
        case "Add":
            let newArr = [...state]
            // newArr.push(action.payload)
            let index = newArr.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (index == -1) {
                newArr.push(action.payload)
            } else {
                newArr[index].quantity = newArr[index].quantity + 1;
            }
            return newArr;
        case "Delete":
            const newState1 = [...state].filter((item) => {
                return item.id != action.payload
            })
            return newState1;
        case "increase":
            const newA = [...state]
            let index1 = newA.findIndex((item) => {
                return item.id == action.payload
            })
            // console.log(index1);
            newA[index1].quantity = newA[index1].quantity + 1;
            
            return newA;
        case "decrease":
            const newA1 = [...state]

            let index12 = newA1.findIndex((item) => {
                return item.id == action.payload
            })
            newA1[index12].quantity = newA1[index12].quantity - 1;
            if (newA1[index12].quantity < 1) {
                newA1[index12].quantity = 1
            }
            return newA1;
        default:
            return state;
    }
}