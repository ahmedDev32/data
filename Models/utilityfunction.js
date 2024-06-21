import axios from "axios";




export const ProductsData = async()=>{
    try {
        let prodData = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/Products`)
        return prodData
    } catch (error) {
        console.log(error);
        return []
    }
}


// get Single Product Data
export let getSingleProduct = async(req)=>{
    try {
       let data = await axios.get(process.env.NEXT_PUBLIC_HOST+"/api/GetSingleProduct?"+req) 
       return data
    } catch (error) {
        console.log(error);
        return []
    }
}

// sign up function
export let SignUp = async(data,req)=>{
    try {
        let url;
        if(req==="SignUp"){
            url = process.env.NEXT_PUBLIC_HOST+"/api/SingUp"
        }else{
            url = process.env.NEXT_PUBLIC_HOST+"/api/login"
        }
        let Data = await axios.post(url,data)
        return Data
    } catch (error) {
        console.log(error);
        return "Error While Creating Account"
    }
}

//Add To Cart
export let AddToCart = (id, name, qty, image, price, category) => {
    let getDatafromLs = JSON.parse(localStorage.getItem("Cart")) 
    const conversionRate = 0.0062; // This is an example rate. Update with the current rate.

    const convertToUSD = (price) => {
        // Remove any spaces and check if the price includes a dollar sign
        if (price.includes('$')) {
          // Price is already in USD, return as is
          return price;
        } else {
          // Convert PKR to USD
          const numericPrice = parseFloat(price.replace(/,/g, '')); // Remove commas if any
          const convertedPrice = numericPrice * conversionRate;
          return `$${convertedPrice.toFixed(2)}`; // Format to 2 decimal places
        }
      };
       let  processedPrice = convertToUSD(price);
      
    
    let CartData = {
        id, name, qty, image, processedPrice, category
    }
    if(getDatafromLs === null){
        let data = [CartData]
        localStorage.setItem("Cart",JSON.stringify(data))
        alert("Item Added To Cart")
    }else{
      // Ensure getDatafromLs is an array
      if (!Array.isArray(getDatafromLs)) {
        getDatafromLs = [getDatafromLs];
    }
    let find_Alrady_Item = getDatafromLs.find(item => item.id === id)
    if(find_Alrady_Item){
        find_Alrady_Item.qty+=1
    }else{
        getDatafromLs.push(CartData);
    }
    // Add the new product to the existing cart array
    localStorage.setItem("Cart", JSON.stringify(getDatafromLs));
    alert("Item Added To Cart")

    }
};

export let GetSubtotal = ()=>{
    let getDatafromLs = JSON.parse(localStorage.getItem("Cart")) 
    
    if(getDatafromLs === null){
        return 0
    }else{
        if(!Array.isArray(getDatafromLs)){
            getDatafromLs = [getDatafromLs]
        }
        let subtotal = 0
        let value = getDatafromLs.forEach(items =>{
            let cleanPrice = parseFloat(items.processedPrice.replace(/\$/g, "")); // Remove dollar sign and convert to number
            console.log(cleanPrice);
             subtotal += cleanPrice * items.qty; // Calculate subtotal
        })
        console.log(subtotal);
        return subtotal.toFixed(2)
    }
}


export let PlaceOrder = async(data) =>{
  try {
    let datas = await axios.post(process.env.NEXT_PUBLIC_HOST+"/api/orderemail",data)
    return datas
  } catch (error) {
    return {
        success:false,
        msg:"Order Not Submitted"
    }
  }
}


export let SendEmail = async(data) =>{
    try {
      let datas = await axios.post(process.env.NEXT_PUBLIC_HOST+"/api/Contactemail",data)
      return datas
    } catch (error) {
      return {
          success:false,
          msg:"Order Not Submitted"
      }
    }
  }
