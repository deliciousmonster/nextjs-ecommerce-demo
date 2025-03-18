# Harper + Nextjs Ecommerce Template

This is a template for building a [Harper](https://www.harperdb.io/) powered [Nextjs](https://nextjs.org/) application. Eccomerce is the application theme to demo a fullstack application with Harper providing the backend database, API connecting to the data, a caching provider, and a server to run Next.js on. However, the same patterns in this code can be used to run any type of app that requires dynamic data and/or caching!

Almost 2% of global ecommerce sales flow through Harper Systems, with an average p95 latency of 1.12ms across early hints, redirects, and product page lookups for real-world e-commerce applications. See for yourself how fast this demo is by checking the Chrome devtools performance tab on our [live demo](https://test-kgdemo.harperdbcloud.com:9926/).

## Getting Started
To get up and running, [install Harper](https://docs.harperdb.io/docs/install-harperdb), which can be quickly done with `npm install -g harperdb`. You can run this reposity by cloning it down and running the following in your terminal:

`npm i`
`npm run dev`

For more information about getting started with Harper and building your Next.js applications, see our [getting started guides and documentation](https://www.harperdb.io/development/technologies/next-js).

This template includes the [default configuration](./config.yaml), which specifies how files are handled in your application.

The [schema.graphql](./schema.graphql) is the schema definition. This is the main starting point for defining your database schema, specifying which tables you want and what attributes/fields they should have.

The [resources.js](./resources.js) provides a template for defining JavaScript resource classes, for customized application logic in your endpoints. This repo comes with sample product data in a json file.
