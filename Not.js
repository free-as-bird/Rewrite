/*
[rewrite_local]
https?:\/\/notability\.com\/global url script-response-body https://raw.githubusercontent.com/free-as-bird/Rewrite/refs/heads/main/Not.js

[mitm]
hostname = notability.com
*/

const response = {
  "data" : {
    "associateAppStoreTransactions" : {
      "__typename" : "SubscriptionOverview",
      "tier" : "premium",
      "current" : {
        "source" : "AppStoreConsumer",
        "expirationDate" : 4102416000000,
        "details" : {
          "originalTransactionId" : "2000001147842386",
          "__typename" : "AppStoreSubscription",
          "overDeviceLimit" : false,
          "productId" : "com.gingerlabs.Notability.premium_subscription",
          "appStoreStatus" : "active"
        },
        "renewalDate" : 4102415000000,
        "tier" : "premium",
        "gracePeriodEndDate" : 4102444800000,
        "__typename" : "Subscription"
      },
      "quotas" : {
        "__typename" : "SubscriptionFeatureQuotaView",
        "learnSummaries" : {
          "isUsageExceeded" : false,
          "usagePercentage" : 0,
          "__typename" : "SubscriptionFeatureQuota"
        },
        "learnQuestions" : {
          "isUsageExceeded" : false,
          "usagePercentage" : 0,
          "__typename" : "SubscriptionFeatureQuota"
        },
        "liveTranscription" : {
          "isUsageExceeded" : false,
          "usagePercentage" : 0,
          "__typename" : "SubscriptionFeatureQuota"
        }
      },
      "prior" : null
    }
  }
};

$done({ body: JSON.stringify(response) });
