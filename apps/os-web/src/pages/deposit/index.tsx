import { Div, Input, P } from "react-with-native";
import { projectPaymentConfig } from "payment-types";
import { FancyLoader } from "fancy-loader";
import { useState } from "react";
import { inputClass, UI } from "react-with-native-ui";
import { useAlert } from "react-with-native-alert";
import { AuthenticationLayout } from "layout";
import { BigButton } from "big-button";
import { MarkdownContent } from "markdown";
import { useMe } from "../../util/useMe";
/**

TODO:

Install stripe, add secret to `Persona`, find the simplest way to receive one-time payments.

Add webhook to finalise payment from stripe, and add `credit` to your `Person`.

# Monetisation

Users/group credit should be deducted, not only for manual execution via API, but also for queue/watcher execution.

Finish stripe integration for homeserver: any user/group should buy credit.

 */
const DepositPage = () => {
  const { me, isLoading } = useMe();
  const [amount, setAmount] = useState("");
  const [coupon, setCoupon] = useState("");
  const alert = useAlert();
  const multiplier = coupon.toLowerCase() === "workshop" ? 2 : 1;
  const credit =
    amount.length > 0 && !isNaN(Number(amount))
      ? multiplier * (Number(amount) / projectPaymentConfig.creditToEuroRatio)
      : 0;
  return (
    <Div>
      {isLoading ? (
        <FancyLoader />
      ) : (
        //!me ? (<P>Login first</P>)
        <Div>
          {/* Fill in euros and see how much credits you get, then click buy */}
          <P>
            Euro:{" "}
            <Input
              className={inputClass}
              placeholder="Fill in your amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </P>
          {/* <P>
            Coupon:{" "}
            <Input
              className={inputClass}
              placeholder="Coupon code (optional)"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </P> */}
          <P>CREDIT: {credit}</P>
          <BigButton
            title="Buy"
            onClick={() => {
              alert?.(
                `You want to pay ${amount}, you'll get ${credit} credits.`,
                `However, we aren't finished with the payment setup. Please email info@codefromanywhere.com to buy your credits manually.`,
                [
                  {
                    onPress: () => {
                      window.location.href = "mailto:info@codefromanywhere.com";
                    },
                    text: "Ok",
                  },
                  { text: "Cancel" },
                ]
              );
              //Initiate payment
              //Lead people from `deposit` to stripe. from stripe to `deposited`.
            }}
          />

          <MarkdownContent
            content={`# Pricelist*
          
- TTS: 1 credit per hour
- ChatGPT: 0.10 credit per page
- Video generation: 0.20 credit per minute
- Other things: comparable to above

\`*\` = We are still determining the perfect pricing, but in the initial phase, prices are low and will go up rapidly. Early investors will get the most value (because we need you to build this out)

# Rounds

We are selling in rounds. Starting Q2 2023, we're doing at least one round every year. 

|Round|Total Volume|Credits|Price per credit| Start round | End round | Sold? |
|------|-----|----|---|---|---|---|
|Solo Freelance|-|-|-|2016|2021|✅|
|Self-investment|€100.000|200.000|€0.50|jan '22 | jan '23 | ✅ |
| **Friends & Family (current round)**|€500.000|1.000.000| €0.50|2023-02-15|2023-06-30|🟠|
|Fools|€2.500.000| 2.500.000 | €1,00 | t.b.a. | when sold out|
|A| t.b.a. | t.b.a. | €1,50 | t.b.a. |when sold out|
|B| t.b.a. | t.b.a. | | t.b.a. |when sold out|
|C| t.b.a. | t.b.a. | | t.b.a. |when sold out|
|D| t.b.a. | t.b.a. | | t.b.a. |when sold out|

NB: We are free to change the pricing and running cost on our platform at all times, however, our foremost priority is to return value to our earliest investors.

# Notes

## Freelance Solo (2016-2021)

In this period Wijnand was freelancing solo to pay the bills, so he could focus on working on his own tools and frameworks for app/web development and AI.

## Self-investment (2022)

For more than a year, we remained incredibly lean. We've bootstrapped using previous freelance earnings, but also have some ongoing client work that enables us to pay the bills. We've built out the fundamental framework we're using to build all our tools and apps with.

## Friends & Family (2023)

In order to scale up, we're looking for half a million from friends and family, so we can increase our branding, marketing capacity, and production quality, so we can bring our tools to the world with confidence.

# Q&A

If you have any questions, feel free to contact me at info@codefromanywhere.com or book a meeting via https://calendly.com/karsens

## Do you have a pitchdeck?

Yes we do! We don't share it publicly though. Please email info@codefromanywhere.com if you are interested.

## How will you make me rich? Why should I invest now?

We won't promise anything, but we aim to sell trillions of credits to billions of people, at a price that will settle much higher than the early price. We won't stop until we succeed.

## How can I use my credits?

You will be able to apply AI on your own documents and knowledge. It is not available yet, but the value of the credit will only become bigger and bigger over the coming time.

## What if the credits don't end up being useful for me?

For large amounts of credits, if you don't spend your credits, we'll make it possible to sell your credits back to people in the next rounds. e.g. if you buy 100.000 credits for €50.000, you'll be able to sell them back to a next round for a profit. This is how early investment is incentivised and rewarded. 

`}
            config={{}}
          />
        </Div>
      )}
    </Div>
  );
};

export default DepositPage;
