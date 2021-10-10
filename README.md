# PicklesAuctionsEmailingMicroservice
# Application Architecture Diagram.
![alt text](https://github.com/kadiyamram/PicklesAuctions-Emailing-Microservice/blob/main/images/PicklesAuctionsEmailMicroserviceArchitecture.png)

Application Uses  

1. AWS API Gateway
AWS API Gateway is a fully managed service which handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, CORS support, authorization and access control, throttling, monitoring, and API version management. 

2. SQS
SQS stands for Simple Queue Service which isfully managed message queuing service that offers a secure, durable and available hosted queue, and it lets us integrate and decouple distributed software systems and components. Unlike SNS, messages are not pushed to receiver.API Gateway is subscribed by SQS

3. Lambda
AWS Lambda is a service which computes the code without any server. It is said to be serverless compute. The code is executed based on the response of events in AWS services such as adding/removing files in S3 bucket, updating Amazon DynamoDB tables, HTTP request from Amazon API Gateway etc.SQS is subscribed by Lambda to ensure high scalability and high availability.Lambda is responsible to send the email to recipients

4. NodeMailer
Nodemailer is a module for Node.js applications to allow to send email for that we need a transporter object. To Send Email I have Created GMail

5. S3
Amazon S3 (Simple Storage Service) provides object storage, which is built for storing and recovering any amount of information or data from anywhere over the internet. It provides this storage through a web services interface. 
Lambda stores the responses to S3, so that failed responses can be processed again.
