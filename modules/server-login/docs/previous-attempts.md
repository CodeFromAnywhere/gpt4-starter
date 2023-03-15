Previously (before january '23) I had built a different way for authententication, where devices were gathering authentication methods until a person was matched onto it. This has been deprecated and replaced by `Person.authentication`. Previously it was `Person.authenticationMethods` and `Device.authenticationMethods` but this was creating lots of unneeded complexity in the login system.

Parts of the old code can still be found in `/old`
