import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.id, name: action.name, price: action.price,
                qty: action.qty, size: action.size, img: action.img
            }]
        case "REMOVE":
            let newArray = [...state];
            newArray.splice(action.index, 1)
            return newArray;
        case "UPDATE":
            let array = [...state];
            array.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price);
                    array[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return array;
            })
            return array;
        case "DROP":
            let emptyArray = [];
            return emptyArray;
        default:
            console.log("Error in Reducer");
            break;
    }

}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <div>
            <CartDispatchContext.Provider value={dispatch}>
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
            </CartDispatchContext.Provider>
        </div>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
