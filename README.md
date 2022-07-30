# Minimalistic Typescript GCP Cloud Function Plop

The goal of this project is to provide you with a minimalistic Typescript GCP Cloud Function project. All unnecessary frameworks or packages have been striped off.

The remaining packages that can be deleted if required are as follow:

- faker-js
- jest
- joi
- lodash

### ✋🏼 Prerequisites

To make the project fully functionnal, you'll need the following elements from GCP:

1. A GCP service account ([see the docs](https://cloud.google.com/iam/docs/service-accounts))
1. A GCP project id ([see the docs](https://cloud.google.com/resource-manager/docs/creating-managing-projects))
1. Enable the requested GCP APIs (such as Cloud Function)

### ⚙️ Development

1. Duplicate and rename `src/functions/myCloudFunction`, rename the exported function as well in `src/functions/<yourNewFunction>/index.ts`
1. Export your new function in `src/index.ts`
1. Work on your cloud function
1. Deploy your cloud function ([see 🚀 Deployment](#🚀-deployment))
1. If not done, you can delete `src/functions/myCloudFunction` and its links

### 🚀 Deployment

Given a cloud function named `myCloudFunction` that is ready to be deployed.

The deployment stage will be done in 2 phases:

1. First, we need to build to transpile and build the project, this can be achieved by running the following comment:

   ```bash
   npm run build
   ```

1. Then, once the project is built, we can deploy our function by running to following command:

   ```bash
   gcloud functions deploy myCloudFunction \
   --runtime nodejs16 \
   --trigger-http \
   --region europe-west1 \
   --memory 256MB
   ```

   ☝🏼 Change the parameters to match your needs

   💡 The CLI might ask you if your cloud function should `Allow unauthenticated invocations`, answer accordingly.

1. After a few minutes, you should be provided with a httpsTrigger url, copy and paste it in a browser or in Postman and run (given your function is a `GET` method and does not require a body, if so change type of method and insert body). You should see the response of your cloud function 👏🏼
