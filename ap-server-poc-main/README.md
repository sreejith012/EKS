# api-server-poc #

## EKS Solution ##

* We will deploy a nodejs application in the two EKS clusters in two different AWS Regions, install AWS Load Balancer Controller in both the clusters, and expose the application in both regions using Application Load Balancer (ALB).<br />
* To achieve High availabilty, we will configure these ALBs as endpoints in AWS Global Accelerator. We will configure one region to be the primary and other as failover.<br />
* S3 will be used as Storage solution with Cross Region Replication.<br />
* Nodejs application will containerised and the docker image will be stored in AWS ECR Repo.<br />
* KMS Will be leveraged for encryption and ALB endpoint will be secured by HTTPS.

## Deployment Plan ##

* EKSCTL Commands will be used to create the EKS Cluster.<br />
* Helm will be used to install AWS Load Balancer Controller.<br />
* kubectl commands will be used to create the deployments, services etc.<br />
* Other AWS Services(s3, route 53, IAM etc) will be created using Terrafom.<br />
* In future, we can come up with a CICD Plan for the deployment process.<br />

## S3 Security Soluton ##

* Enable S3 Access Logs to identify incoming requests. Amazon athena can be used to query this logs to get information such as Source IP addrees, Timestamp, Operations performed on an object etc.<br />
* Enable Monitoring(Cloudwatch), S3 server access logging & Cloudtrail for Auditing the s3 Data.<br />
* Enable Versioning, Cross region replication & MFA Delete<br />
* Enable Server Side Encryption & Client Side encryption using KMS for data at rest. Enforce only HTTPS(TLS) connections using S3 Bucket policy for   encrypting data at transit.<br />


