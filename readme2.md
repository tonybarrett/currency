### Currency Converter

A single component with two dropdowns (to and from currencies), and INPUT field for the amount to convert and a display field.

There is a service file to fire the APIs which are subscribed to in the component.

There is also an interface file (unused just now; version2 ?) of the currencies that come back via the API.

##Error

Unfortunatly while it retrtieves data okay, when I fire the CONVERT API with a payload the backend cancels the call. I can only assume that parameters are in the incorrect format. I've added in a screen shot so you can see that I am sending What I believe is the correct data. The console shows a "A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received" error.