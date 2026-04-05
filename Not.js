/*
[rewrite_local]
https?:\/\/notability\.com\/global url script-response-body https://raw.githubusercontent.com/free-as-bird/Rewrite/refs/heads/main/Not.js

[mitm]
hostname = notability.com
*/

const response = {
	"data": {
		"associateAppStoreTransactions": {
			"__typename": "SubscriptionOverview",
			"tier": "premium",
			"current": {
				"__typename": "Subscription",
				"source": "AppStoreConsumer",
				"tier": "premium",
				"expirationDate": 4102444800000,
				"renewalDate": null,
				"gracePeriodEndDate": null,
				"details": {
					"__typename": "AppStoreSubscription",
					"originalTransactionId": "2000001147842386",
					"productId": "com.gingerlabs.Notability.premium_subscription",
					"overDeviceLimit": false,
					"appStoreStatus": "active"
				}
			},
			"prior": null,
			"quotas": {
				"__typename": "SubscriptionFeatureQuotaView=",
				"learnQuestions": {
					"__typename": "SubscriptionFeatureQuota",
					"isUsageExceeded": false,
					"usagePercentage": 0
				},
				"learnSummaries": {
					"__typename": "SubscriptionFeatureQuota",
					"isUsageExceeded": false,
					"usagePercentage": 0
				},
				"liveTranscription": {
					"__typename": "SubscriptionFeatureQuota",
					"isUsageExceeded": false,
					"usagePercentage": 0
				}
			}
		}
	}
};

$done({ body: JSON.stringify(response) });
