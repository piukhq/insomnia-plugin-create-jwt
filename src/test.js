const JWT = require('njwt');

const payload = {
    "user_id": "test@user.one",
    "bundle_id": "com.barclays.test",
    "organisation_id": "Barclays"
};
const token = JWT.create(payload, "test_secret", alg = "HS512");
delete token.body.jti
delete token.body.exp

console.log(token);
