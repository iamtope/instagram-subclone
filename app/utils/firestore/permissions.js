import config from '../../../config/env'

const serviceAccount = {
  "type": "service_account",
  "project_id": config.SOCIAL_PROJECT_ID,
  "private_key_id": config.SOCIAL_PRIVATE_KEY_ID,
  "private_key": config.SOCIAL_PRIVATE_KEY,
  "client_email": config.SOCIAL_CLIENT_EMAIL,
  "client_id": config.SOCIAL_CLIENT_ID,
  "auth_uri": config.SOCIAL_AUTH_URI,
  "token_uri": config.SOCIAL_TOKEN_URI,
  "auth_provider_x509_cert_url": config.SOCIAL_AUTH_PROVIDER_X509_CERT_URI,
  "client_x509_cert_url": config.SOCIAL_CLIENT_X509_CERT_URL
}

export default serviceAccount;
