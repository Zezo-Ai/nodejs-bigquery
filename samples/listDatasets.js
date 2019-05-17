/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function main() {
  // [START bigquery_list_datasets]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');

  async function listDatasets() {
    // Lists all datasets in current GCP project.

    // Create a client
    const bigqueryClient = new BigQuery();

    // Lists all datasets in the specified project
    const [datasets] = await bigqueryClient.getDatasets();
    console.log('Datasets:');
    datasets.forEach(dataset => console.log(dataset.id));
  }
  listDatasets();
  // [END bigquery_list_datasets]
}
main(...process.argv.slice(2));