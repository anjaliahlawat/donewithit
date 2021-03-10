import {Notifications} from 'expo'
const { Keyboard, Alert } = require("react-native")
const { default: messagesApi } = require("../api/messages")

function ContactSellerForm({listing}){
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss()

    const result = await messagesApi.send(message,listing.id)

    if(!result.ok){
      console.log("Error", result)
      return Alert.alert("Error", "Could not send the message to the seller")
    }

    resetForm()

     Notifications.presentLocalNotificationAsync({
      title: "Awesome",
      body: "Your message was sent to the seller."
    })

  }
}