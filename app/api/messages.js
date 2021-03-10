import client from './client'

const send = (message, listing) => client.post("/messages", {
  message,
  listingId
})

export default {
  send,
}