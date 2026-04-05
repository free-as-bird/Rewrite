/*
[rewrite_local]
https?:\/\/notability\.com\/global url script-response-body https://raw.githubusercontent.com/free-as-bird/Rewrite/refs/heads/main/Not2.js

[mitm]
hostname = notability.com
*/

const response = {
  "data" : {
    "processAppleReceipt" : {
      "__typename" : "SubscriptionResult",
      "isClassic" : true,
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "2000001147842386",
        "tier" : "premium",
        "refundedDate" : null,
        "refundedReason" : null,
        "isInBillingRetryPeriod" : false,
        "expirationDate" : "2027-12-31T23:59:59.000Z",
        "gracePeriodExpiresAt" : null,
        "overDeviceLimit" : false,
        "expirationIntent" : null,
        "__typename" : "AppStoreSubscription",
        "user" : null,
        "status" : "active",
        "originalPurchaseDate" : "2026-04-05T02:24:52.000Z"
      },
      "error" : 0
    }
  }
};

$done({ body: JSON.stringify(response) });
