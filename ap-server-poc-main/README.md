# api-server-poc

EKS Solution 

* We will deploy a nodejs application in the two EKS clusters in two different AWS Regions, install AWS Load Balancer Controller in both the clusters, and expose the application in both regions using Application Load Balancer (ALB).<br />
* To achieve High availabilty, we will configure these ALBs as endpoints in AWS Global Accelerator. We will configure one region to be the primary and other as failover.<br />
* S3 will be used as Storage solution with Cross Region Replication.<br />
* Nodejs application will containerised and the docker image will be stored in AWS ECR Repo.<br />
* KMS Will be leveraged for encryption and ALB endpoint will be secured by HTTPS.


