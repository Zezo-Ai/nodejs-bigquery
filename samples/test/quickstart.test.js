// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {describe, it, after, beforeEach} = require('mocha');
const {randomUUID} = require('crypto');
const cp = require('child_process');
const {BigQuery} = require('@google-cloud/bigquery');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const bigquery = new BigQuery();

describe('Quickstart', () => {
  const datasetName = `nodejs_samples_tests_quickstart_${randomUUID()}`.replace(
    /-/gi,
    '_',
  );
  beforeEach(async function () {
    this.currentTest.retries(2);
  });
  after(async () => {
    await bigquery.dataset(datasetName).delete({force: true});
  });

  it('quickstart should create a dataset', async () => {
    const output = execSync(`node quickstart ${datasetName}`);
    assert.include(output, `Dataset ${datasetName} created.`);
  });
});
