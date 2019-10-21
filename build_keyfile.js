require('dotenv').config();
const fs = require('fs');

const {
  GCLOUD_KEY_FILE_TYPE,
  GCLOUD_KEY_FILE_PROJECT_ID,
  GCLOUD_KEY_FILE_PRIVATE_ID,
  GCLOUD_KEY_FILE_CLIENT_EMAIL,
  GCLOUD_KEY_FILE_CLIENT_ID,
  GCLOUD_KEY_FILE_AUTH_URI,
  GCLOUD_KEY_FILE_TOKEN_URI,
  GCLOUD_KEY_FILE_AUTH_PROVIDER_CERT_URL,
  GCLOUD_KEY_FILE_CLIENT_CERT_URL,
  GCLOUD_KEY_FILE_PRIVATE_KEY
} = process.env;

const data = {
  type: GCLOUD_KEY_FILE_TYPE,
  project_id: GCLOUD_KEY_FILE_PROJECT_ID,
  private_key_id: GCLOUD_KEY_FILE_PRIVATE_ID,
  private_key: GCLOUD_KEY_FILE_PRIVATE_KEY,
  client_email: GCLOUD_KEY_FILE_CLIENT_EMAIL,
  client_id: GCLOUD_KEY_FILE_CLIENT_ID,
  auth_uri: GCLOUD_KEY_FILE_AUTH_URI,
  token_uri: GCLOUD_KEY_FILE_TOKEN_URI,
  auth_provider_x509_cert_url: GCLOUD_KEY_FILE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: GCLOUD_KEY_FILE_CLIENT_CERT_URL
};

const path = './keyfile.json';

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

storeData(data, path);
