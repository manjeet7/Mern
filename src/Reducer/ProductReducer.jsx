import * as products from "../Constants/ProductConst"
export const productReducer = (state = {product:[]},action)=>{
    switch (action.type) {
        case products.ALL_PRODUCT_REQUEST:
        return{
            loading :true,
            product : []
        }
        case products.ALL_PRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload.products,
                productCount:action.payload.productCount,
                resultPage:action.payload.resultPage
            }
        case products.ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case products.CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}

//product details reducer 

export const productdetailsReducer = (state = {product:{}},action)=>{
    console.log("product deetails reducer called ");
    switch (action.type) {
        case products.PRODUCT_DETAILS_REQUEST:
        return{
            loading :true,
            ...state
        }
        case products.PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload,
            }
        case products.PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case products.CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}