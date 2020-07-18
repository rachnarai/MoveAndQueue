import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81d4fa',
    alignItems: 'center',
    justifyContent: 'center',

  },
  tinyLogo: {

    width: 80,
    height: 70,

  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  logoText: {
    marginVertical: 20,
    fontSize: 30,
    color: 'black',
    fontFamily: 'Nunito-Bold',
  },
  customerSelection: {
    fontSize: 27,
    marginTop: '70%'
  },
  vendorSelection: {
    fontSize: 27,
    marginTop: '10%'
  },

  appButtonContainerCustomer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    marginBottom: 30

  },
  appButtonContainerVendor: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 72,
    marginBottom: 30,
  },

  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  inputAddressField: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    fontFamily: 'Nunito-Bold',
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    fontFamily: 'Nunito-Bold'
  },
  checkButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    margin: 15,
    height: 40,
    fontFamily: 'Nunito-Bold'
  },
  submitButtonText: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
  }
  
});
