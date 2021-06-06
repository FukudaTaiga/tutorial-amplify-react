import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure({
  "aws_project_region": "ap-northeast-1",
    "aws_cognito_identity_pool_id": "ap-northeast-1:90eadeb8-31e3-4212-ba5b-fbecaf71dce7",
    "aws_cognito_region": "ap-northeast-1",
    "aws_user_pools_id": "ap-northeast-1_X3BYGbMNv",
    "aws_user_pools_web_client_id": "65eb0smto8v1p3uop27j4iag9q",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://ofduma5tkne2tm7hnr3iodlem4.appsync-api.ap-northeast-1.amazonaws.com/graphql",
    "aws_appsync_region": "ap-northeast-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-b6wgwtw2nbhpvjw3ouggrv5myq",
    "aws_user_files_s3_bucket": "tutorialamplifywithrb789377c3f754740bde486ddda134217-dev",
    "aws_user_files_s3_bucket_region": "ap-northeast-1"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
