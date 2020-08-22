function send(msg){
fetch("https://discord.com/api/v8/channels/745329858317385770/messages", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US",
    "authorization": "NDk1NjgxNTc2OTQ1MDU3ODEw.Xz5s9w.5sZlXa_LV7ugFu7qGJt6jRhIqzg",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-super-properties": "eyJvcyI6IiIsImJyb3dzZXIiOiJDaHJvbWUiLCJkZXZpY2UiOiIiLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCAxMzAyMC44Ny4wKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODMuMC40MTAzLjExOSBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiODMuMC40MTAzLjExOSIsIm9zX3ZlcnNpb24iOiIiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NjU3MDUsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
  },
  "referrer": "https://discord.com/channels/745297401262243840/745329858317385770",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"content\":\""+msg+"\",\"tts\":false}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}

send("message");
