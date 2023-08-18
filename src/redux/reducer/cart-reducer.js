import { ADD_TO_CART, DECREASE, DELETE_CART, INCREASE } from "../constant/cart-constant";

const initialState = {
    cartList: [],
    listProduct : [
        {
          productId: "P001",
          productName: "Pizza",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg/640px-Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
          price: 12,
          stock: 10,
          quantity : 1
        },
        {
          productId: "P002",
          productName: "Hamburger",
          image: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
          price: 16,
          stock: 0,
          quantity : 1
        },
        {
          productId: "P003",
          productName: "Bread",
          image: "https://healthynibblesandbits.com/wp-content/uploads/2019/12/Milk-Bread-FF2.jpg",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
          price: 13,
          stock: 8,
          quantity : 1
        },
        {
          productId: "P004",
          productName: "Cake",
          image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2023-01-Chocolate-Strawberry-Cakes%2Fchocolate-strawberry-cake-1",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
          price: 14,
          stock: 6,
          quantity : 1
        },
      ]

}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART: {
            let cartListUpdate = [...state.cartList];
            // let cartListUpdate = [...state.cartList];

            let index = state.cartList.findIndex(item => item.productId === action.payload.productId);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                //
                cartListUpdate[index].quantity +=1
            }else {  //khi người dùng click Ghế đang đặt chưa có trong mảng => push vào mảng
                cartListUpdate.push(action.payload)
            }
            //Cập nhật lại state => giao diện render lại
            state.cartList = cartListUpdate;
            return { ...state }
        }
        case DELETE_CART: {
            let cartListUpdate = [...state.cartList];

            let index = cartListUpdate.findIndex(item => item.productId === action.payload.productId);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                //
                cartListUpdate.splice(index,1)
            }
            //Cập nhật lại state => giao diện render lại
            state.cartList = cartListUpdate;
            return { ...state }
        }
        case INCREASE : {
            let index = state.cartList.findIndex(item => item.productId === action.payload.productId);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                //
                state.cartList[index].quantity +=1
            }
            state.cartList = [...state.cartList];
            return { ...state }
        }
        case DECREASE : {
            let index = state.cartList.findIndex(item => item.productId === action.payload.productId);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                //
                state.cartList[index].quantity -=1
            }
            state.cartList = [...state.cartList];
            return { ...state }
        }

        default: return { ...state }
    }
}


export default cartReducer;