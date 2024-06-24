import { Alert } from "react-native";
import { SellerForm } from ".";


export   const validateForm = (sellerForm:SellerForm): boolean => {

    if (!sellerForm.sellerName.trim()) {
      Alert.alert('Seller Name is required');
      return false;

    }

    if (!sellerForm.shopName.trim()) {
      Alert.alert('Shop Name is required');
      return false;


    }

    if (!sellerForm.address.trim()) {
      Alert.alert('Address is required');
      return false;

      
    }

    if (!sellerForm.landmark.trim()) {
      Alert.alert('Landmark is required');
      return false;


    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(sellerForm.phoneNumber)) {
      Alert.alert('Phone Number must be a valid 10-digit number');
      return false;


    }

    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(sellerForm.pincode)) {
      Alert.alert('Pincode must be a valid 6-digit number');
      return false;


    }

    return true;
  } 