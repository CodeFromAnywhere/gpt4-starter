import { Context } from "server/typings/common";
/**
 * This is where payment updates come in
 *
 * Set your stripe webhook to:
 *
 * `https://yourapi.com/function/receiveMessageWithContextRaw`
 *
 * Example response we are looking for:


```json
{
  eventType: 'checkout.session.completed',
  paymentIntent: {
    id: 'cs_live_a1UZF4BGbEfOGyWwgG6FVZyvUSD4i17QhtS9tJ0UVr6jXtsYTLi96YejAA',
    object: 'checkout.session',
    after_expiration: null,
    allow_promotion_codes: null,
    amount_subtotal: 50,
    amount_total: 50,
    automatic_tax: { enabled: false, status: null },
    billing_address_collection: null,
    cancel_url: 'https://findclarity.ai',
    client_reference_id: null,
    consent: null,
    consent_collection: null,
    created: 1677971110,
    currency: 'eur',
    custom_fields: [],
    custom_text: { shipping_address: null, submit: null },
    customer: null,
    customer_creation: 'if_required',
    customer_details: {
      address: [Object],
      email: 'xxxx',
      name: 'xzxzzz',
      phone: null,
      tax_exempt: 'none',
      tax_ids: []
    },
    customer_email: null,
    expires_at: 1678057510,
    invoice: null,
    invoice_creation: { enabled: false, invoice_data: [Object] },
    livemode: true,
    locale: null,
    metadata: { personId: 'blablabla' },
    mode: 'payment',
    payment_intent: 'pi_3Mi48uCL0Yranfl402OUoqpD',
    payment_link: null,
    payment_method_collection: 'always',
    payment_method_options: {},
    payment_method_types: [ 'card', 'bancontact', 'ideal' ],
    payment_status: 'paid',
    phone_number_collection: { enabled: false },
    recovered_from: null,
    setup_intent: null,
    shipping_address_collection: null,
    shipping_options: [],
    status: 'complete',
    submit_type: null,
    subscription: null,
    success_url: 'https://findclarity.ai',
    total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
    url: null,
    shipping_cost: null,
    shipping_details: null
  }
}
```

 */
export declare const receivePaymentUpdateWithContextRaw: (serverContext: Context) => Promise<{
    isSuccessful: boolean;
    message: string;
} | undefined>;
//# sourceMappingURL=receivePaymentUpdateWithContextRaw.d.ts.map