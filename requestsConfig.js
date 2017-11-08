module.exports = {
    licenseRequest: {
        url: 'https://ca-dac-aequilibrium.demo.verified.me/dac/licenseRequest',
        body: {
            "queryExpression": {
                "type": "and",
                "expressions" : [
                    {
                        "type": "select",
                        "name": "bankInfo",
                        "fields": [
                            "given_name",
                            "family_name",
                            "phone_number",
                            "address",
                            "birthdate",
                            "email"
                        ],
                        "fromDAType": [
                            {
                                "name": "vme://assets/foundationalIdentity",
                                "type": "da"
                            }
                        ]
                    }
                ]
            },
            "displayText": {
                "en":"Please share your information with Kijiji",
                "fr": "French Display Text"
            },
            "defaultLang":"en",
            "licenseNotificationUrl":"https://sleepy-badlands-26278.herokuapp.com/response",
            "state":"opaque state data"
        }
    }
};