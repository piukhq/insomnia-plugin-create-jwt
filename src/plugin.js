const JWT = require('njwt');

module.exports.templateTags = [{
  name: 'CreateJWT',
  displayName: 'create JWT',
  description: 'create bearer jwt for ubiquity',
  args: [
    {
      displayName: 'user_id',
      type: 'string',
      defaultValue: '',
    },
    {
      displayName: 'bundle_id',
      type: 'string',
      defaultValue: '',
    },
    {
      displayName: 'organisation_id',
      type: 'string',
      defaultValue: '',
    },
    {
      displayName: 'secret',
      type: 'string',
      defaultValue: '',
    }
  ],
  async run(context, user_id, bundle_id, organisation_id, secret) {
    console.log("creating jwt");
    const payload = {
      "user_id": user_id,
      "bundle_id": bundle_id,
      "organisation_id": organisation_id,
      "property_id": "currently_not_used"
    };
    const token = JWT.create(payload, secret, alg = "HS512");
    delete token.body.jti;
    delete token.body.exp;

    console.log("token created");
    return token.compact();
  }
}];
