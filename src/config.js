const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "img-produtos",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://8j9blp9bp9.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_GAuXeJKgt",
      APP_CLIENT_ID: "1uub48hr7u3o8epl09icomcfn5",
      IDENTITY_POOL_ID: "us-east-1:7d4dfe02-0477-4664-b36a-b71cd5363e33",
    },
  };
  
  export default config;

  