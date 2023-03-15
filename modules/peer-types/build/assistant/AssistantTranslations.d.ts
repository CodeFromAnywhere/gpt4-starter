export type AssistantTranslations = {
    /**
     * ```ts
     * `Could not find anyone with ${phoneNumber}`
     * ```
     */
    phoneNumberNotFound: string;
    /**
     * ```ts
     * `Please fill in a valid number of credits to send`
     * ```
     */
    invalidCreditAmount: string;
    /**
     * ```ts
     * `You don't have so many credits, you have ${personCredit} credits.`
     * ```
     */
    notEnoughCredit: string;
    /**
     * ```ts
     * `You want to send ${creditAmount} to ${phoneNumber}. Coming soon.`
     * ```
     */
    sendCreditComingSoon: string;
    /**
     * ```ts
     * "You've opted out. You won't receive email communication from us."
     * ```
     */
    optedOutMessage: string;
    /**
     * Message showing the user what can be done with the bot
     *
     * ```ts
     * `This is ${name}. Available commands:
  
  - *help*: get menu of available commands and other info on how the Chat AI works
  - *opt-out*: opt out for the newsletter
  - *contacts*: Show other Chat AI's that are available
  - *credit*: Get the page that shows how much credit you have, and with info on how to buy more.
  - *profile*: see what we think we know about you
  - *reset*: Reset all your messages from our systems.
  - *delete*: Delete your account.
  - *invite*: Show the invite system
  `
     * ```
     */
    helpMessage: string;
    /**
  ```ts
  `Your name: ${name}
  Phone number: ${phoneNumber}
  Credit: ${credit}`
  ```
     */
    profileInfo: string;
    /**
     * `Invite system is coming soon.`
     */
    inviteMessage: string;
    /**
     * `You requested to reset all your messages. Coming soon.`
     */
    resetMessage: string;
    /**
     * `You requested to delete your account. Coming soon`
     */
    deleteMessage: string;
    /**
     * `Couldn't find that bot. Available bots include:\n\n${botList}`
     */
    botNotFound: string;
    /**
     * `Success. You're now chatting with ${slug}`
     */
    useBotSuccess: string;
    /**
     * ```ts
     * `Hi there, this is ${persona.name} speaking!
  
  You can send me ${freeMessages} free messages. After that, you'll be prompted to buy new messages for ${pricePerMessage} per message.
  
  If you continue to talk with me, you are agreeing with our privacy policy and terms of use, which can be found here:
  
  https://codefromanywhere.com/privacy-policy
  `
  ```
     */
    firstMessage: string;
    /**
  ```ts
  `To answer your first message:`
  ```
     */
    firstMessagePrefix: string;
    /**
  ```ts
  `Due to lots of active users, we are not able to respond to your request right now. Our current limits:
  
  Current active users: ${dailyActiveUsers}
  
  ${tooManyDauMaxVips}
  ${tooManyDauMaxPaid}
  ${tooManyDauMaxFree}
  
  We ask you to deposit some credit before starting with this bot, so you'll be first in line to use it.`
  ```
   */
    tooManyDau: string;
    /**
  "Yay! You've got $messages new messages to send. Enjoy!"
   */
    paymentSuccessMessage: string;
    /**
  `You're out of messages. Please buy new messages if you wish to keep talking with me.`
   */
    paywallInsufficientMessage: string;
    /**
  `We're at capacity and aren't onboarding any new users at this point. To enter, please buy messages, and you'll be first in line.`
   */
    paywallNewUserLimitMessage: string;
    /**
     * `Your credit is ${credit}`
     */
    paywallCreditStatus: string;
    /**
  
  ```ts
  
  `Hi, ${name}.
        
  ${reasonMessage}
  
  Click here to buy ${messagesAmountMore} messages for ${localPrice}, or choose your own amount:
  
  ${expensivePaymentUrl}
  
  Click here to quickly buy ${messagesAmountCheap} messages for €0.21 (+€0.29 fees, which makes it ${cheaperFactor}x more expensive):
  
  ${cheapPaymentUrl}
  
  Check my website to find more chatbots and other AI. We're also offering custom chatbots for your company:
  
  ${websiteUrl}
  
  Can't click the links? Add me to your contacts.`
  
  ```
  
   */
    paywallMessage: string;
};
//# sourceMappingURL=AssistantTranslations.d.ts.map